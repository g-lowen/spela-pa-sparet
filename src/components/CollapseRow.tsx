import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { createRowData } from "./helpers/createRowData";
import { styled } from "@mui/material/styles";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  cursor: "pointer",
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover
  }
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  "&.guess": {
    color: theme.palette.warning.dark,
    ...theme.applyStyles("dark", {
      color: theme.palette.warning.light
    })
  },
  "&.correct": {
    color: theme.palette.success.dark,
    ...theme.applyStyles("dark", {
      color: theme.palette.success.light
    })
  },
  "&.wrong": {
    color: theme.palette.error.dark,
    ...theme.applyStyles("dark", {
      color: theme.palette.error.light
    })
  },
  // TODO: These draw colors
  "&.guessDraw": {
    background: `linear-gradient(to right, ${theme.palette.warning.dark}, ${theme.palette.error.dark})`,
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    ...theme.applyStyles("dark", {
      background: `linear-gradient(to right, ${theme.palette.warning.light}, ${theme.palette.error.light})`,
      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text"
    })
  },
  "&.correctDraw": {
    background: `linear-gradient(to right, ${theme.palette.success.dark}, ${theme.palette.error.dark})`,
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    ...theme.applyStyles("dark", {
      background: `linear-gradient(to right, ${theme.palette.success.light}, ${theme.palette.error.light})`,
      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text"
    })
  },
  "&.wrongDraw": {
    background: `linear-gradient(to right, ${theme.palette.error.dark}, ${theme.palette.error.dark})`,
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    ...theme.applyStyles("dark", {
      background: `linear-gradient(to right, ${theme.palette.error.light}, ${theme.palette.error.light})`,
      WebkitTextFillColor: "transparent",
      WebkitBackgroundClip: "text"
    })
  }
}));

export const CollapseRow = ({
  betResult,
  index,
  isLargeScreen,
  onClick
}: {
  betResult: ReturnType<typeof createRowData>["betResults"][0];
  index: number;
  isLargeScreen: boolean;
  onClick: () => void;
}) => (
  <StyledTableRow key={betResult.date} onClick={onClick}>
    <TableCell component="th" scope="row">
      {index + 1}
    </TableCell>
    {isLargeScreen ? (
      <>
        <TableCell>{betResult.date}</TableCell>
        <TableCell>{betResult.matchType}</TableCell>
      </>
    ) : null}
    {index < 12 ? (
      <StyledTableCell className={betResult.firstClass?.className}>
        {betResult.firstClass?.team}
      </StyledTableCell>
    ) : (
      <StyledTableCell
        className={betResult.firstClass?.className}
        colSpan={2}
        sx={{ textAlign: "center" }}
      >
        {betResult.firstClass?.team}
      </StyledTableCell>
    )}
    {index < 12 ? (
      <StyledTableCell className={betResult.trolley?.className}>
        {betResult.trolley?.team}
      </StyledTableCell>
    ) : null}
  </StyledTableRow>
);
