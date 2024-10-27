import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GAMBLERS } from "../constants/constants";
import { MOCK_GAMBLERS } from "../constants/mockConstants";
import { createRowData } from "./helpers/createRowData";
import { Row } from "./Row";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";

import { useColorScheme } from "@mui/material/styles";

export default function DataTable() {
  const { mode, setMode } = useColorScheme();

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: "100vh" }}>
        <Table aria-label="collapsible table" size="small" stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell>
                <ToggleButtonGroup
                  size="small"
                  exclusive
                  onChange={(_event, newMode: "light" | "dark") => {
                    setMode(newMode);
                  }}
                  value={mode}
                >
                  <ToggleButton value="dark">🌙</ToggleButton>
                  <ToggleButton value="light">☀️</ToggleButton>
                </ToggleButtonGroup>
              </TableCell>
              <TableCell>Namn</TableCell>
              <TableCell align="right">Matcher</TableCell>
              <TableCell align="right">✔️</TableCell>
              <TableCell align="right">❌</TableCell>
              <TableCell align="right">Poäng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .sort((a, b) => b.points - a.points)
              .map((row) => (
                <Row key={row.name} row={row} />
              ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}

const rows = GAMBLERS.map((gambler) => createRowData(gambler));
