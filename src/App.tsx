import "./App.css";
import Box from "@mui/material/Box";
import { ChartCard } from "./components/ChartCard";
import DataTable from "./components/DataTable";
import { Header } from "./components/Header";
import { MATCHES } from "./constants/constants";

function App() {
  const latestMatch = MATCHES.filter((match) => match.winner !== null).at(-1);

  return (
    <>
      <Header />
      <center>
        <Box sx={{ padding: "6px" }}>
          <h1>Nästa avsnitt</h1>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ChartCard
              match={latestMatch}
              matchIndex={latestMatch && MATCHES.indexOf(latestMatch)}
            />
          </Box>
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
