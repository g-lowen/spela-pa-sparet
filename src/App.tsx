import { useState } from "react";

import { Box, Divider } from "@mui/material";
import { ChartCard } from "./components/ChartCard";
import DataTable from "./components/DataTable";
import { Header } from "./components/Header";
import { MATCHES } from "./constants/matches";
import { Carousel } from "./components/Carousel";
import { TabPanel } from "./components/TabPanel";
import { SeasonalEffects } from "./components/seasonal/SeasonalEffects";

function App() {
  const [tabValue, setTabValue] = useState(0);

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
    <Box sx={{ position: "relative" }}>
      <SeasonalEffects />
      <Header onChange={handleChange} tabValue={tabValue} />
      <center style={{ padding: "6px" }}>
        <TabPanel value={tabValue} index={0}>
          {upcomingMatch ? (
            <>
              <h1>Nästa avsnitt</h1>
              <ChartCard
                match={upcomingMatch}
                matchIndex={upcomingMatch && MATCHES.indexOf(upcomingMatch)}
                sx={{ maxWidth: "355px" }}
              />
            </>
          ) : null}
          <Divider sx={{ marginTop: "12px" }} />
          <h2>Första gruppen</h2>
          <Carousel>
            {groupOne.map((match, index) => (
              <ChartCard key={index} match={match} matchIndex={index} />
            ))}
          </Carousel>
          <Divider sx={{ marginTop: "44px" }} />
          <h2>Andra gruppen</h2>
          <Carousel>
            {groupTwo.map((match, index) => (
              <ChartCard key={index} match={match} matchIndex={index + 3} />
            ))}
          </Carousel>
          <Divider sx={{ marginTop: "44px" }} />
          <h2>Tredje gruppen</h2>
          <Carousel>
            {groupThree.map((match, index) => (
              <ChartCard key={index} match={match} matchIndex={index + 6} />
            ))}
          </Carousel>
          <Divider sx={{ marginTop: "44px" }} />
          <h2>Fjärde gruppen</h2>
          <Carousel>
            {groupFour.map((match, index) => (
              <ChartCard key={index} match={match} matchIndex={index + 9} />
            ))}
          </Carousel>
          <Divider sx={{ marginTop: "44px" }} />
          <h2>Slutspel</h2>
          <Carousel>
            {playoff.map((match, index) => (
              <ChartCard key={index} match={match} matchIndex={index + 12} />
            ))}
          </Carousel>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <DataTable />
        </TabPanel>
      </center>
    </Box>
  );
}

export default App;
