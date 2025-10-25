import { useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import { createRowData } from "./helpers/create-row-data/createRowData";
import { CollapseRow } from "./CollapseRow";
import { useMediaQuery } from "@mui/material";
import Dialog from "./Dialog";

export function Row(props: {
  row: ReturnType<typeof createRowData>;
  index: number;
}) {
  const { row, index } = props;
  const isLargeScreen = useMediaQuery("(min-width:600px)");
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    const selection = window.getSelection();
    if (selection?.type === "Range") {
      return;
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <TableRow
        onClick={handleOpen}
        sx={(theme) => ({
          cursor: "pointer",
          "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover,
          },
        })}
      >
        <TableCell sx={{ maxWidth: "20px" }}>{index + 1}</TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.matchesPlayed}</TableCell>
        <TableCell align="right">{row.wins}</TableCell>
        <TableCell align="right">{row.losses}</TableCell>
        <TableCell align="right">{row.points}</TableCell>
      </TableRow>
      <Dialog open={open} onClose={handleClose} playerName={row.name}>
        <Table
          size="small"
          aria-label="bets"
          sx={(theme) => ({
            backgroundColor: theme.palette.background.paper,
            ...theme.applyStyles("dark", {
              backgroundColor: theme.palette.background.paper,
            }),
          })}
        >
          <TableHead>
            <TableRow>
              <TableCell>Avsnitt</TableCell>
              {isLargeScreen ? (
                <>
                  <TableCell>Datum</TableCell>
                  <TableCell>Matchtyp</TableCell>
                </>
              ) : null}
              <TableCell sx={{ textAlign: `${!isLargeScreen && "center"}` }}>
                1:a klass
              </TableCell>
              <TableCell sx={{ textAlign: `${!isLargeScreen && "center"}` }}>
                Dressinen
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {row.betResults.map((betResult, index) => {
              return (
                <CollapseRow
                  betResult={betResult}
                  index={index}
                  isLargeScreen={isLargeScreen}
                  key={index}
                />
              );
            })}
          </TableBody>
        </Table>
      </Dialog>
    </>
  );
}
