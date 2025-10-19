import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Skeleton from "@mui/material/Skeleton";
import { GAMBLERS } from "../constants/gamblers";
import { createRowData } from "./helpers/createRowData";
import { Row } from "./Row";

import useMediaQuery from "@mui/material/useMediaQuery";

interface DataTableProps {
  showTable: boolean;
}

export default function DataTable({ showTable }: DataTableProps) {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <>
      {showTable ? (
        <Paper
          sx={{
            maxWidth: "960px",
            width: "100%"
          }}
        >
          <TableContainer
            sx={{
              ...(isSmallScreen && {
                ["& .MuiTableCell-root"]: {
                  padding: "6px 2px",
                  ["&:last-of-type:not(:first-of-type)"]: {
                    padding: "6px"
                  },
                  ["&:first-of-type:not(:first-of-type:has(.MuiCollapse-root))"]:
                    {
                      padding: "6px"
                    }
                }
              })
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
      ) : (
        <Skeleton
          height={343}
          width="100%"
          sx={{ borderRadius: "5px", maxWidth: "960px" }}
          variant="rectangular"
        />
      )}
    </>
  );
}

const rows = GAMBLERS.map((gambler) => createRowData(gambler));
