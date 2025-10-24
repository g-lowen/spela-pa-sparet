import Button from "@mui/material/Button";
import MuiDialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, type ReactElement, type Ref } from "react";
import Box from "@mui/material/Box";

interface DialogProps {
  children: ReactElement;
  open: boolean;
  onClose: () => void;
  playerName: string;
}

export default function Dialog({
  children,
  open,
  onClose,
  playerName,
}: DialogProps) {
  return (
    <MuiDialog
      fullScreen
      open={open}
      onClose={onClose}
      slots={{
        transition: Transition,
      }}
    >
      <AppBar sx={{ position: "sticky" }}>
        <Toolbar>
          {playerName}s bets
          <Button color="inherit" onClick={onClose} sx={{ marginLeft: "auto" }}>
            Stäng
          </Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ display: "flex", justifyContent: "center" }}>{children}</Box>
    </MuiDialog>
  );
}

const Transition = forwardRef(function Transition(
  props: TransitionProps & {
    children: ReactElement<unknown>;
  },
  ref: Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});
