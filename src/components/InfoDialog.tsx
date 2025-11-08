import Button from "@mui/material/Button";
import MuiDialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { List, ListItem, ListItemText } from "@mui/material";

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
  return (
    <MuiDialog open={open} onClose={onClose}>
      <AppBar sx={{ position: "sticky" }} color="inherit">
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
