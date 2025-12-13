import Button from "@mui/material/Button";
import MuiDialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import { forwardRef, type ReactElement, type Ref } from "react";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material";
import { isChristmas } from "./seasonal/functions/seasonal";

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
  const theme = useTheme();
  const isWinter = isChristmas();

  return (
    <MuiDialog
      fullScreen
      open={open}
      onClose={onClose}
      slots={{
        transition: Transition,
      }}
      slotProps={{
        paper: {
          sx: {
            ...(isWinter && {
              background:
                theme.palette.mode === "dark"
                  ? "linear-gradient(to bottom, #0a1929 0%, #1a1a2e 50%, #0a1929 100%)"
                  : "linear-gradient(to bottom, #e3f2fd 0%, #f5f5f5 50%, #e1f5fe 100%)",
            }),
          },
        },
      }}
    >
      <AppBar
        color="inherit"
        sx={{
          position: "sticky",
          ...(isWinter && {
            background:
              theme.palette.mode === "dark"
                ? "linear-gradient(to bottom, #1e3a5f 0%, #1a1a2e 100%)"
                : "linear-gradient(to bottom, #e3f2fd 0%, #ffffff 100%)",
            boxShadow:
              theme.palette.mode === "dark"
                ? "0 4px 20px rgba(100, 200, 255, 0.3)"
                : "0 4px 20px rgba(100, 150, 255, 0.2)",
          }),
        }}
      >
        <Toolbar
          sx={{
            ...(isWinter && {
              borderBottom:
                theme.palette.mode === "dark"
                  ? "2px solid rgba(100, 200, 255, 0.3)"
                  : "2px solid rgba(144, 202, 249, 0.4)",
            }),
          }}
        >
          {playerName}s bets
          <Button color="inherit" onClick={onClose} sx={{ marginLeft: "auto" }}>
            Stäng ❌
          </Button>
        </Toolbar>
      </AppBar>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        {children}
      </Box>
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
