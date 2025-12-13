import Button from "@mui/material/Button";
import MuiDialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { List, ListItem, ListItemText, useTheme } from "@mui/material";
import { isChristmas } from "./seasonal/functions/seasonal";

interface InfoDialogProps {
  open: boolean;
  onClose: () => void;
  data:
    | {
        id: number | string;
        betters: string;
        value: number;
        label: (location: "legend" | "tooltip" | "arc") => string;
      }[]
    | null;
  title: string;
}

export const InfoDialog = ({ open, onClose, data, title }: InfoDialogProps) => {
  const theme = useTheme();
  const isWinter = isChristmas();

  return (
    <MuiDialog
      open={open}
      onClose={onClose}
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
        color="inherit"
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {title}
          <Button color="inherit" onClick={onClose}>
            Stäng ❌
          </Button>
        </Toolbar>
      </AppBar>
      <List>
        {data?.map((item) => (
          <ListItem key={item.id}>
            <ListItemText
              primary={item.label("tooltip")}
              secondary={`Bettare: ${item.betters}`}
            />
          </ListItem>
        ))}
      </List>
    </MuiDialog>
  );
};
