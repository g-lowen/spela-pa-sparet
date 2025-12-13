import { useState } from "react";

import { Box, Divider, useTheme } from "@mui/material";
import { ChartCard } from "./components/ChartCard";
import DataTable from "./components/DataTable";
import { Header } from "./components/Header";
import { MATCHES } from "./constants/matches";
import { TabPanel } from "./components/TabPanel";
import { SeasonalEffects } from "./components/seasonal/SeasonalEffects";
import { Carousel } from "./components/Carousel";
import { isChristmas } from "./components/seasonal/functions/seasonal";

function App() {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();
  const isWinter = isChristmas();

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  const upcomingMatch = MATCHES.find((match) => match.winner === null);
  const groupOne = MATCHES.filter((_match, index) => index < 3);
  const groupTwo = MATCHES.filter((_match, index) => index >= 3 && index < 6);
  const groupThree = MATCHES.filter((_match, index) => index >= 6 && index < 9);
  const groupFour = MATCHES.filter((_match, index) => index >= 9 && index < 12);
  const playoff = MATCHES.filter(
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
          {upcomingMatch ? (
            <>
              <h1>Nästa avsnitt</h1>
              <ChartCard
                match={upcomingMatch}
                matchIndex={upcomingMatch && MATCHES.indexOf(upcomingMatch)}
              />
            </>
          ) : null}
          <Divider sx={{ marginTop: "16px" }} />
          <h2>Första gruppen</h2>
          <Carousel matches={groupOne} groupStartIndex={0} />
          <Divider sx={{ marginTop: "16px" }} />
          <h2>Andra gruppen</h2>
          <Carousel matches={groupTwo} groupStartIndex={3} />
          <Divider sx={{ marginTop: "16px" }} />
          <h2>Tredje gruppen</h2>
          <Carousel matches={groupThree} groupStartIndex={6} />
          <Divider sx={{ marginTop: "16px" }} />
          <h2>Fjärde gruppen</h2>
          <Carousel matches={groupFour} groupStartIndex={9} />
          <Divider sx={{ marginTop: "16px" }} />
          <h2>Slutspel</h2>
          <Carousel matches={playoff} groupStartIndex={12} />
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <DataTable />
        </TabPanel>
      </center>
    </Box>
  );
}

export default App;
