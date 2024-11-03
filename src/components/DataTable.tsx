import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GAMBLERS } from "../constants/constants";
import { createRowData } from "./helpers/createRowData";
import { Row } from "./Row";

import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import { useColorScheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function DataTable() {
  const { mode, setMode } = useColorScheme();
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer
        sx={{
          maxHeight: "100vh",
          ...(isSmallScreen && {
            ["& .MuiTableCell-root"]: {
              padding: "6px 2px",
              ["&:last-of-type:not(:first-of-type)"]: {
                padding: "6px"
              },
              ["&:first-of-type:not(:first-child:has(.MuiCollapse-root))"]: {
                padding: "6px"
              }
            }
          })
        }}
      >
        <Table aria-label="collapsible table" size="small">
          <TableHead>
            <TableRow>
              <TableCell sx={{ width: "80px" }}>
                <ToggleButtonGroup
                  size="small"
                  exclusive
                  onChange={(_event, newMode: "light" | "dark") => {
                    setMode(newMode);
                  }}
                  value={mode}
                >
                  <ToggleButton value="dark" disabled={mode === "dark"}>
                    🌙
                  </ToggleButton>
                  <ToggleButton value="light" disabled={mode === "light"}>
                    ☀️
                  </ToggleButton>
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
