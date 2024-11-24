import "./App.css";
import Box from "@mui/material/Box";
import { ChartCard } from "./components/ChartCard";
import DataTable from "./components/DataTable";
import { Header } from "./components/Header";
import { MATCHES } from "./constants/constants";
import { CardsContainer } from "./components/CardsContainer";

function App() {
  const upcomingMatch = MATCHES.find((match) => match.winner === null);
  const groupOne = MATCHES.filter((_match, index) => index < 6);
  const groupTwo = MATCHES.filter((_match, index) => index >= 6 && index < 12);
  const playoff = MATCHES.filter(
    (match) => match.matchType === "semifinal" || match.matchType === "final"
  );

  return (
    <>
      <Header />
      <center>
        <Box sx={{ padding: "6px" }}>
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
          <h2>Tabell</h2>
          <DataTable />
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
        </Box>
      </center>
    </>
  );
}

export default App;
