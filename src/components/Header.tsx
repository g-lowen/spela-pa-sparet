import {
  ToggleButton,
  ToggleButtonGroup,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

interface HeaderProps {
  onChange: (_event: React.SyntheticEvent, newValue: number) => void;
  tabValue: number;
}

export const Header = ({ onChange, tabValue }: HeaderProps) => {
  const { mode, setMode } = useColorScheme();

  return (
    <AppBar position="sticky" color="inherit">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Tabs
          value={tabValue}
          onChange={onChange}
          aria-label="tabs"
          variant="fullWidth"
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="Diagram" {...a11yProps(0)} />
          <Tab label="Tabell" {...a11yProps(1)} />
        </Tabs>
        <ToggleButtonGroup
          size="medium"
          exclusive
          onChange={(_event, newMode: "light" | "dark" | "system") => {
            setMode(newMode);
          }}
          value={mode}
        >
          <ToggleButton value="dark" disabled={mode === "dark"}>
            🌙
          </ToggleButton>
          <ToggleButton value="system" disabled={mode === "system"}>
            ⚙️
          </ToggleButton>
          <ToggleButton value="light" disabled={mode === "light"}>
            ☀️
          </ToggleButton>
        </ToggleButtonGroup>
      </Toolbar>
    </AppBar>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
