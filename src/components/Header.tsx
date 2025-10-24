import { ToggleButton, ToggleButtonGroup, Tabs, Tab } from "@mui/material";
import { useColorScheme } from "@mui/material/styles";

interface HeaderProps {
  onChange: (_event: React.SyntheticEvent, newValue: number) => void;
  tabValue: number;
}

export const Header = ({ onChange, tabValue }: HeaderProps) => {
  const { mode, setMode } = useColorScheme();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        padding: "6px",
        paddingBottom: "0px",
      }}
    >
      <Tabs
        value={tabValue}
        onChange={onChange}
        aria-label="tabs"
        variant="fullWidth"
      >
        <Tab label="Diagram" {...a11yProps(0)} />
        <Tab label="Tabell" {...a11yProps(1)} />
      </Tabs>
      <ToggleButtonGroup
        size="small"
        exclusive
        onChange={(_event, newMode: "light" | "dark") => {
          setMode(newMode);
        }}
        value={mode}
      >
        <ToggleButton value="dark" disabled={mode === "dark"}>
          🌙
        </ToggleButton>
        <ToggleButton value="light" disabled={mode === "light"}>
          ☀️
        </ToggleButton>
      </ToggleButtonGroup>
    </header>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
