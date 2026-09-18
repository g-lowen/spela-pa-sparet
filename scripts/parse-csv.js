// Script to read a CSV export of the bets form and write a season's gamblers.ts
// Usage: node scripts/parse-csv.js <input.csv> <output.ts>
//
// Example:
//   node scripts/parse-csv.js data/bets-2026.csv \
//     src/constants/seasons/season-2026/gamblers.ts
//
// The import path and the team type in the output are derived from where the
// output lands, so this keeps working as seasons are added.

import fs from "node:fs";
import path from "node:path";
import { parse } from "csv-parse/sync";
import { format } from "prettier";

const NAME_COLUMN = "Ditt namn";

// In episode order. The two semifinal answers collapse into a single bet, the
// way the Match list models them.
const QUESTIONS = [
  { key: "Grupp 1 #1 - Vilka vinner matchen?", matchType: "group" },
  { key: "Grupp 1 #2 - Vilka vinner matchen?", matchType: "group" },
  { key: "Grupp 1 #3 - Vilka vinner matchen?", matchType: "group" },
  { key: "Grupp 2 #1 - Vilka vinner matchen?", matchType: "group" },
  { key: "Grupp 2 #2 - Vilka vinner matchen?", matchType: "group" },
  { key: "Grupp 2 #3 - Vilka vinner matchen?", matchType: "group" },
  { key: "Grupp 3 #1 - Vilka vinner matchen?", matchType: "group" },
  { key: "Grupp 3 #2 - Vilka vinner matchen?", matchType: "group" },
  { key: "Grupp 3 #3 - Vilka vinner matchen?", matchType: "group" },
  { key: "Grupp 4 #1 - Vilka vinner matchen?", matchType: "group" },
  { key: "Grupp 4 #2 - Vilka vinner matchen?", matchType: "group" },
  { key: "Grupp 4 #3 - Vilka vinner matchen?", matchType: "group" },
  {
    key: "Semifinal 1* - Vilka vinner matchen?",
    matchType: "semifinal",
    semifinal: "first",
  },
  {
    key: "Semifinal 2* - Vilka vinner matchen?",
    matchType: "semifinal",
    semifinal: "second",
  },
  { key: "Final - Vilka vinner matchen?", matchType: "final" },
];

const fail = (message) => {
  console.error(message);
  process.exit(1);
};

if (process.argv.length < 4) {
  fail("Usage: node scripts/parse-csv.js <input.csv> <output.ts>");
}

const inputPath = process.argv[2];
const outputPath = process.argv[3];

if (!fs.existsSync(inputPath)) {
  fail(`Input file not found: ${inputPath}`);
}

const csvContent = fs.readFileSync(inputPath, "utf8");

// Excel on a Swedish locale writes semicolons and a BOM. Sniff the delimiter
// from the header rather than assuming a comma, and let csv-parse strip the
// BOM, so the first column name does not silently come back undefined.
const headerLine = csvContent.replace(/^﻿/, "").split(/\r?\n/)[0] ?? "";
const delimiter =
  (headerLine.match(/;/g) || []).length > (headerLine.match(/,/g) || []).length
    ? ";"
    : ",";

let records;
try {
  records = parse(csvContent, {
    bom: true,
    columns: true,
    delimiter,
    skip_empty_lines: true,
    trim: true,
  });
} catch (error) {
  fail(`Could not parse ${inputPath} as CSV: ${error.message}`);
}

if (records.length === 0) {
  fail(`No rows found in ${inputPath}.`);
}

// Every expected column must be present, or each row would quietly lose bets.
const columns = Object.keys(records[0]);
const missing = [NAME_COLUMN, ...QUESTIONS.map((q) => q.key)].filter(
  (key) => !columns.includes(key),
);
if (missing.length > 0) {
  console.error(
    `${inputPath} is missing ${missing.length} expected column(s):`,
  );
  for (const key of missing) console.error(`  ${key}`);
  console.error(`\nDelimiter detected: "${delimiter}". Columns found:`);
  for (const key of columns) console.error(`  ${key}`);
  process.exit(1);
}

// A blank answer would drop a bet and shift every later one out of step with
// the match list, so collect them all and report rather than writing bad data.
const problems = [];
const gamblers = records.map((row, rowIndex) => {
  const name = row[NAME_COLUMN];
  const label = name ? `"${name}"` : `row ${rowIndex + 2}`;
  if (!name) {
    problems.push(`${label}: no value in "${NAME_COLUMN}"`);
  }

  const bets = [];
  let semifinalFirst = null;
  let semifinalSecond = null;

  for (const question of QUESTIONS) {
    const value = row[question.key];
    if (!value) {
      problems.push(`${label}: blank answer for "${question.key}"`);
      continue;
    }

    if (question.matchType === "group") {
      bets.push({ matchType: "group", winner: value });
    } else if (question.matchType === "semifinal") {
      if (question.semifinal === "first") semifinalFirst = value;
      else semifinalSecond = value;
    } else {
      if (semifinalFirst && semifinalSecond) {
        bets.push({ matchType: "semifinal", semifinalFirst, semifinalSecond });
        semifinalFirst = null;
        semifinalSecond = null;
      }
      bets.push({ matchType: "final", winner: value });
    }
  }

  return { name, bets };
});

if (problems.length > 0) {
  console.error(
    `Refusing to write ${outputPath}: ${problems.length} problem(s) found.\n` +
      "Each one would shift a gambler's bets out of step with the matches.\n",
  );
  for (const problem of problems) console.error(`  ${problem}`);
  process.exit(1);
}

// Point the import at src/types.ts relative to wherever the output lands, and
// pick up the season's team union from the teams.ts beside it.
const outputDir = path.dirname(path.resolve(outputPath));
const typesImport = path
  .relative(outputDir, path.resolve("src/types.ts"))
  .split(path.sep)
  .join("/")
  .replace(/\.ts$/, "");
const typesSpecifier = typesImport.startsWith(".")
  ? typesImport
  : `./${typesImport}`;

const teamsFile = path.join(outputDir, "teams.ts");
let gamblerType = "Gambler";
let teamImport = "";
if (fs.existsSync(teamsFile)) {
  const teamType = fs
    .readFileSync(teamsFile, "utf8")
    .match(/export type (\w+)/)?.[1];
  if (teamType) {
    gamblerType = `Gambler<${teamType}>`;
    teamImport = `import { ${teamType} } from "./teams";\n`;
  }
} else {
  console.warn(
    `No teams.ts beside ${outputPath}; falling back to an untyped Gambler[].`,
  );
}

const source =
  `import { Gambler } from "${typesSpecifier}";\n` +
  teamImport +
  `\nexport const GAMBLERS: ${gamblerType}[] = ${JSON.stringify(gamblers, null, 2)};\n`;

const formatted = await format(source, { parser: "typescript" });
fs.writeFileSync(outputPath, formatted);
console.log(
  `Wrote ${gamblers.length} gambler(s) to ${outputPath} as ${gamblerType}[].`,
);
