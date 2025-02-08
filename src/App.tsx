import { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { ChartCard } from "./components/ChartCard";
import DataTable from "./components/DataTable";
import { Header } from "./components/Header";
import { MATCHES } from "./constants/constants";
import { CardsContainer } from "./components/CardsContainer";

function App() {
  const [showTable, setShowTable] = useState(false);

  const upcomingMatch = MATCHES.find((match) => match.winner === null);
  const groupOne = MATCHES.filter((_match, index) => index < 6);
  const groupTwo = MATCHES.filter((_match, index) => index >= 6 && index < 12);
  const playoff = MATCHES.filter(
    (match) => match.matchType === "semifinal" || match.matchType === "final"
  );

  return (
    <Box>
      <Header />
      <center style={{ padding: "6px" }}>
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
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            gap: "6px",
            justifyContent: "center"
          }}
        >
          <h2>Tabell</h2>
          <Button
            onClick={() => setShowTable((prev) => !prev)}
            variant="contained"
          >
            {showTable ? "Göm" : "Visa"}
          </Button>
        </Box>
        <DataTable showTable={showTable} />
        <h2>Första gruppen</h2>
        <CardsContainer>
          {groupOne.map((match, index) => (
            <ChartCard key={index} match={match} matchIndex={index} />
          ))}
        </CardsContainer>
        <h2>Andra gruppen</h2>
        <CardsContainer>
          {groupTwo.map((match, index) => (
            <ChartCard key={index} match={match} matchIndex={index + 6} />
          ))}
        </CardsContainer>
        <h2>Slutspel</h2>
        <CardsContainer>
          {playoff.map((match, index) => (
            <ChartCard key={index} match={match} matchIndex={index + 12} />
          ))}
        </CardsContainer>
      </center>
    </Box>
  );
}

export default App;
