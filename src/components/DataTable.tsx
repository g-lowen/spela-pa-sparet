import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import { GAMBLERS } from "../constants/gamblers";
import { createRowData } from "./helpers/createRowData";
import { Row } from "./Row";

import { useMediaQuery } from "@mui/material";

export default function DataTable() {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <Paper
      sx={{
        maxWidth: "960px",
        width: "100%",
      }}
    >
      <TableContainer
        sx={{
          ...(isSmallScreen && {
            "& .MuiTableCell-root": {
              padding: "6px 2px",
              "&:last-of-type:not(:first-of-type)": {
                padding: "6px",
              },
              "&:first-of-type:not(:first-of-type:has(.MuiCollapse-root))": {
                padding: "6px",
              },
            },
          }),
        }}
      >
        <Table aria-label="collapsible table" size="small">
          <TableHead>
            <TableRow>
              <TableCell width="20" />
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
