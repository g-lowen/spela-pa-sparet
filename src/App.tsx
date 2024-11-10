import "./App.css";
import DataTable from "./components/DataTable";
import { MATCHES } from "./constants/constants";
import Box from "@mui/material/Box";
function App() {
  const latestMatch = MATCHES?.filter((match) => match.winner !== null).at(-1);

  return (
    <Box sx={{ padding: "6px" }}>
      <center>
        Senaste uppdateringen:{" "}
        {latestMatch ? latestMatch.date : "Inga matcher spelade"}
      </center>
      <DataTable />
    </Box>
  );
}

export default App;
