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
import useMediaQuery from "@mui/material/useMediaQuery";

export function Row(props: { row: ReturnType<typeof createRowData> }) {
  const { row } = props;
  const isLargeScreen = useMediaQuery("(min-width:600px)");
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    const selection = window.getSelection();
    if (selection?.type === "Range") {
      return;
    }
    setOpen((prev) => !prev);
  };

  return (
    <>
      <TableRow onClick={handleClick}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={handleClick}
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
            <Box sx={{ margin: "6px" }}>
              <Table size="small" aria-label="bets" stickyHeader>
                <TableHead>
                  <TableRow>
                    <TableCell>Avsnitt</TableCell>
                    {isLargeScreen ? (
                      <>
                        <TableCell>Datum</TableCell>
                        <TableCell>Matchtyp</TableCell>
                      </>
                    ) : null}
                    <TableCell
                      sx={{ textAlign: `${!isLargeScreen && "center"}` }}
                    >
                      1:a klass
                    </TableCell>
                    <TableCell
                      sx={{ textAlign: `${!isLargeScreen && "center"}` }}
                    >
                      Dressinen
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.betResults.map((betResult, index) => {
                    return (
                      <CollapseRow
                        key={betResult.date}
                        betResult={betResult}
                        index={index}
                        isLargeScreen={isLargeScreen}
                        onClick={handleClick}
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
