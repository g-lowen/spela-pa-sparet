import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ChartCard } from "./components/ChartCard";
import DataTable from "./components/DataTable";
import { Header } from "./components/Header";
import { MATCHES } from "./constants/matches";
import { CardsContainer } from "./components/CardsContainer";
import { TabPanel } from "./components/TabPanel";

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
    <Box>
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
          <h2>Första gruppen</h2>
          <CardsContainer>
            {groupOne.map((match, index) => (
              <ChartCard key={index} match={match} matchIndex={index} />
            ))}
          </CardsContainer>
          <h2>Andra gruppen</h2>
          <CardsContainer>
            {groupTwo.map((match, index) => (
              <ChartCard key={index} match={match} matchIndex={index + 3} />
            ))}
          </CardsContainer>
          <h2>Tredje gruppen</h2>
          <CardsContainer>
            {groupThree.map((match, index) => (
              <ChartCard key={index} match={match} matchIndex={index + 6} />
            ))}
          </CardsContainer>
          <h2>Fjärde gruppen</h2>
          <CardsContainer>
            {groupFour.map((match, index) => (
              <ChartCard key={index} match={match} matchIndex={index + 9} />
            ))}
          </CardsContainer>
          <h2>Slutspel</h2>
          <CardsContainer>
            {playoff.map((match, index) => (
              <ChartCard key={index} match={match} matchIndex={index + 12} />
            ))}
          </CardsContainer>
        </TabPanel>
        <TabPanel value={tabValue} index={1}>
          <DataTable />
        </TabPanel>
      </center>
    </Box>
  );
}

export default App;
