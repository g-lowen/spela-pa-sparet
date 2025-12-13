import {
  ToggleButton,
  ToggleButtonGroup,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  useTheme,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { isChristmas } from "./seasonal/functions/seasonal";

interface HeaderProps {
  onChange: (_event: React.SyntheticEvent, newValue: number) => void;
  tabValue: number;
}

export const Header = ({ onChange, tabValue }: HeaderProps) => {
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();
  const isWinter = isChristmas();

  return (
    <AppBar
      position="sticky"
      color="inherit"
      sx={{
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
          justifyContent: "space-between",
          ...(isWinter && {
            borderBottom:
              theme.palette.mode === "dark"
                ? "2px solid rgba(100, 200, 255, 0.3)"
                : "2px solid rgba(144, 202, 249, 0.4)",
          }),
        }}
      >
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
