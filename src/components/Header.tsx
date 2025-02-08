import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { useColorScheme } from "@mui/material/styles";

export const Header = () => {
  const { mode, setMode } = useColorScheme();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "right",
        padding: "6px",
        paddingBottom: "0px"
      }}
    >
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
