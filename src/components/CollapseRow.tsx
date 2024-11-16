import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { createRowData } from "./helpers/createRowData";
import { styled } from "@mui/material/styles";
import { MATCH_TYPE_TRANSLATION } from "../constants/constants";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
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
  }
}));

export const CollapseRow = ({
  betResult,
  index,
  isLargeScreen
}: {
  betResult: ReturnType<typeof createRowData>["betResults"][0];
  index: number;
  isLargeScreen: boolean;
}) => (
  <StyledTableRow key={betResult.date}>
    <TableCell component="th" scope="row">
      {index + 1}
    </TableCell>
    {isLargeScreen ? (
      <>
        <TableCell>{betResult.date}</TableCell>
        <TableCell>{MATCH_TYPE_TRANSLATION[betResult.matchType]}</TableCell>
      </>
    ) : null}
    {index < 12 ? (
      <StyledTableCell className={betResult.firstClass?.className}>
        {betResult.firstClass?.team}
      </StyledTableCell>
    ) : (
      <>
        {betResult.matchType === "semifinal" ? (
          <>
            <StyledTableCell className={betResult.firstClass?.className}>
              {betResult.firstClass?.team}
            </StyledTableCell>
            <StyledTableCell className={betResult.trolley?.className}>
              {betResult.trolley?.team}
            </StyledTableCell>
          </>
        ) : (
          <StyledTableCell
            className={betResult.firstClass?.className}
            colSpan={2}
            sx={{ textAlign: "center" }}
          >
            {betResult.firstClass?.team}
          </StyledTableCell>
        )}
      </>
    )}
    {index < 12 ? (
      <StyledTableCell className={betResult.trolley?.className}>
        {betResult.trolley?.team}
      </StyledTableCell>
    ) : null}
  </StyledTableRow>
);
