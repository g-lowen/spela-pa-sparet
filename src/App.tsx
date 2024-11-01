import "./App.css";
import DataTable from "./components/DataTable";
import { MATCHES } from "./constants/constants";
function App() {
  const latestMatch = MATCHES?.filter((match) => match.winner !== null).at(-1);
  return (
    <>
      <center>
        Senaste uppdateringen:{" "}
        {latestMatch ? latestMatch.date : "Inga matcher spelade"}
      </center>
      <DataTable />
    </>
  );
}

export default App;
