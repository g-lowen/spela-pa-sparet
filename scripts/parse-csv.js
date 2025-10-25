// Script to read a CSV file and output formatted JSON
// Usage: node scripts/parse-csv.js <input.csv> <output.json>

const fs = require('fs');
const csv = require('csv-parse/sync');

if (process.argv.length < 4) {
  console.error('Usage: node scripts/parse-csv.js <input.csv> <output.json>');
  process.exit(1);
}

const inputPath = process.argv[2];
const outputPath = process.argv[3];

try {
  const csvContent = fs.readFileSync(inputPath, 'utf8');
  const records = csv.parse(csvContent, {
    columns: true,
    skip_empty_lines: true
  });


  // Transform CSV data to Gambler[] structure
  const matchTypeMap = [
    { key: 'Grupp 1 #1 - Vilka vinner matchen?', matchType: 'group' },
    { key: 'Grupp 1 #2 - Vilka vinner matchen?', matchType: 'group' },
    { key: 'Grupp 1 #3 - Vilka vinner matchen?', matchType: 'group' },
    { key: 'Grupp 2 #1 - Vilka vinner matchen?', matchType: 'group' },
    { key: 'Grupp 2 #2 - Vilka vinner matchen?', matchType: 'group' },
    { key: 'Grupp 2 #3 - Vilka vinner matchen?', matchType: 'group' },
    { key: 'Grupp 3 #1 - Vilka vinner matchen?', matchType: 'group' },
    { key: 'Grupp 3 #2 - Vilka vinner matchen?', matchType: 'group' },
    { key: 'Grupp 3 #3 - Vilka vinner matchen?', matchType: 'group' },
    { key: 'Grupp 4 #1 - Vilka vinner matchen?', matchType: 'group' },
    { key: 'Grupp 4 #2 - Vilka vinner matchen?', matchType: 'group' },
    { key: 'Grupp 4 #3 - Vilka vinner matchen?', matchType: 'group' },
    { key: 'Semifinal 1* - Vilka vinner matchen?', matchType: 'semifinal', semifinal: 'first' },
    { key: 'Semifinal 2* - Vilka vinner matchen?', matchType: 'semifinal', semifinal: 'second' },
    { key: 'Final - Vilka vinner matchen?', matchType: 'final' },
  ];

  const gamblers = records.map((row) => {
    const bets = [];
    let semifinalFirst = null;
    let semifinalSecond = null;
    for (const map of matchTypeMap) {
      const value = row[map.key];
      if (map.matchType === 'group') {
        bets.push({
          matchType: map.matchType,
          winner: value,
        });
      } else if (map.matchType === 'semifinal') {
        if (map.semifinal === 'first') {
          semifinalFirst = value;
        } else if (map.semifinal === 'second') {
          semifinalSecond = value;
        }
      } else if (map.matchType === 'final') {
        // Before pushing final, push semifinal if present
        if (semifinalFirst && semifinalSecond) {
          bets.push({
            matchType: 'semifinal',
            semifinalFirst,
            semifinalSecond,
          });
          semifinalFirst = null;
          semifinalSecond = null;
        }
        bets.push({
          matchType: 'final',
          winner: value,
        });
      }
    }
    return {
      name: row['Ditt namn'],
      bets,
    };
  });

  // Output as a TypeScript file exporting the Gambler[]
  const tsOutput = `import { Gambler } from '../types';\n\nexport const GAMBLERS: Gambler[] = ${JSON.stringify(gamblers, null, 2)};\n`;
  fs.writeFileSync(outputPath, tsOutput);
  console.log(`Parsed and saved to ${outputPath} as TypeScript`);
} catch (err) {
  console.error('Error processing CSV:', err);
  process.exit(1);
}
