import "./App.css";
import Box from "@mui/material/Box";
import { ChartCard } from "./components/ChartCard";
import DataTable from "./components/DataTable";
import { Header } from "./components/Header";
import { MATCHES } from "./constants/constants";

function App() {
  const upcomingMatch = MATCHES.find((match) => match.winner === null);

  return (
    <>
      <Header />
      <center>
        <Box sx={{ padding: "6px" }}>
          {upcomingMatch ? (
            <>
              <h1>Nästa avsnitt</h1>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <ChartCard
                  match={upcomingMatch}
                  matchIndex={upcomingMatch && MATCHES.indexOf(upcomingMatch)}
                />
              </Box>
            </>
          ) : null}
          <h2>Tabell</h2>
          <DataTable />
          <h2>Alla avsnitt</h2>
          <Box
            sx={{
              display: "flex",
              gap: "5px",
              flexWrap: "wrap",
              justifyContent: "center"
            }}
          >
            {MATCHES.map((match, index) => (
              <ChartCard key={index} match={match} matchIndex={index} />
            ))}
          </Box>
        </Box>
      </center>
    </>
  );
}

export default App;
