import { useState } from "react";

import { Box, Divider, Typography, useTheme } from "@mui/material";
import { ChartCard } from "./components/ChartCard";
import DataTable from "./components/DataTable";
import { Header } from "./components/Header";
import { TabPanel } from "./components/TabPanel";
import { SeasonalEffects } from "./components/seasonal/SeasonalEffects";
import { Carousel } from "./components/Carousel";
import { isChristmas } from "./components/seasonal/functions/seasonal";
import { SeasonProvider } from "./season/SeasonProvider";
import { useSeason } from "./season/useSeason";

const GROUP_HEADINGS = [
  "Första gruppen",
  "Andra gruppen",
  "Tredje gruppen",
  "Fjärde gruppen",
];
const MATCHES_PER_GROUP = 3;
const GROUP_COUNT = GROUP_HEADINGS.length;

function AppContent() {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isWinter = isChristmas();
  const { season } = useSeason();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const matches = season.matches;
  const upcomingMatch = matches.find((match) => match.winner === null);
  const groups = GROUP_HEADINGS.map((heading, groupIndex) => {
    const startIndex = groupIndex * MATCHES_PER_GROUP;
    return {
      heading,
      startIndex,
      matches: matches.slice(startIndex, startIndex + MATCHES_PER_GROUP),
    };
  }).filter((group) => group.matches.length > 0);
  const playoffStartIndex = GROUP_COUNT * MATCHES_PER_GROUP;
  const playoff = matches.filter(
    (match) => match.matchType === "semifinal" || match.matchType === "final"
  );

  return (
    <Box
      sx={{
        position: "relative",
        minHeight: "100vh",
        ...(isWinter && {
          background:
            theme.palette.mode === "dark"
              ? "linear-gradient(to bottom, #0a1929 0%, #1a1a2e 50%, #0a1929 100%)"
              : "linear-gradient(to bottom, #e3f2fd 0%, #f5f5f5 50%, #e1f5fe 100%)",
        }),
      }}
    >
      <SeasonalEffects />
      <Header onChange={handleChange} tabValue={tabValue} />
      <center style={{ paddingBottom: "16px" }}>
        <TabPanel value={tabValue} index={0}>
          {matches.length === 0 ? (
            <Typography sx={{ marginTop: "32px" }}>
              Inga avsnitt inlagda för säsongen {season.label} än.
            </Typography>
          ) : (
            <>
              {upcomingMatch ? (
                <>
                  <h1>Nästa avsnitt</h1>
                  <ChartCard
                    match={upcomingMatch}
                    matchIndex={matches.indexOf(upcomingMatch)}
                  />
                </>
              ) : null}
              {groups.map((group) => (
                <div key={group.heading}>
                  <Divider sx={{ marginTop: "16px" }} />
                  <h2>{group.heading}</h2>
                  <Carousel
                    matches={group.matches}
                    groupStartIndex={group.startIndex}
                  />
                </div>
              ))}
              {playoff.length > 0 ? (
                <>
                  <Divider sx={{ marginTop: "16px" }} />
                  <h2>Slutspel</h2>
                  <Carousel
                    matches={playoff}
                    groupStartIndex={playoffStartIndex}
                  />
                </>
              ) : null}
            </>
          )}
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <DataTable />
        </TabPanel>
      </center>
    </Box>
  );
}

function App() {
  return (
    <SeasonProvider>
      <AppContent />
    </SeasonProvider>
  );
}

export default App;
