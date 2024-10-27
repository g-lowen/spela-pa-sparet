import { useState } from "react";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { createRowData } from "./helpers/createRowData";
import { CollapseRow } from "./CollapseRow";
import IconButton from "@mui/material/IconButton";
import Collapse from "@mui/material/Collapse";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// TODO: Make media queries at 600px
export function Row(props: { row: ReturnType<typeof createRowData> }) {
  const { row } = props;

  const [open, setOpen] = useState(false);

  return (
    <>
      <TableRow>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? "🔼" : "🔽"}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.matchesPlayed}</TableCell>
        <TableCell align="right">{row.wins}</TableCell>
        <TableCell align="right">{row.losses}</TableCell>
        <TableCell align="right">{row.points}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Bets
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Avsnitt</TableCell>
                    <TableCell>Datum</TableCell>
                    <TableCell>Matchtyp</TableCell>
                    <TableCell>1:a klass</TableCell>
                    <TableCell>Dressinen</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.betResults.map((betResult, index) => {
                    return (
                      <CollapseRow
                        key={betResult.date}
                        betResult={betResult}
                        index={index}
                      />
                    );
                  })}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </>
  );
}
