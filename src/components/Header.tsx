import { useState } from "react";
import {
  ToggleButton,
  ToggleButtonGroup,
  Tabs,
  Tab,
  AppBar,
  Toolbar,
  Box,
  Divider,
  IconButton,
  ListItemIcon,
  ListSubheader,
  Menu,
  MenuItem,
  Select,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useColorScheme } from "@mui/material/styles";
import { isChristmas } from "./seasonal/functions/seasonal";
import { SEASONS } from "../constants/seasons";
import { useSeason } from "../season/useSeason";
import SettingsIcon from "../svgs/SettingsIcon";

type ThemeMode = "light" | "dark" | "system";

const THEME_MODES: { value: ThemeMode; label: string; icon: string }[] = [
  { value: "dark", label: "Mörkt", icon: "🌙" },
  { value: "system", label: "System", icon: "⚙️" },
  { value: "light", label: "Ljust", icon: "☀️" },
];

interface HeaderProps {
  onChange: (_event: React.SyntheticEvent, newValue: number) => void;
  tabValue: number;
}

export const Header = ({ onChange, tabValue }: HeaderProps) => {
  const { mode, setMode } = useColorScheme();
  const theme = useTheme();
  const isWinter = isChristmas();
  const { seasonId, setSeasonId } = useSeason();
  const isSmallScreen = useMediaQuery("(max-width:600px)");
  const [menuAnchor, setMenuAnchor] = useState<HTMLElement | null>(null);

  const closeMenu = () => setMenuAnchor(null);

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
          // Three columns rather than space-between, so the middle one is
          // centred on the toolbar even though the tabs and the controls
          // beside it are not the same width.
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: 1,
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
          sx={{ justifySelf: "start", minWidth: 0 }}
        >
          <Tab label="Diagram" {...a11yProps(0)} />
          <Tab label="Tabell" {...a11yProps(1)} />
        </Tabs>

        <Box sx={{ justifySelf: "center" }}>
          {isSmallScreen ? null : (
            <Select
              size="small"
              value={seasonId}
              onChange={(event) => setSeasonId(event.target.value)}
              inputProps={{ "aria-label": "Välj säsong" }}
            >
              {SEASONS.map((season) => (
                <MenuItem key={season.id} value={season.id}>
                  {season.label}
                </MenuItem>
              ))}
            </Select>
          )}
        </Box>

        <Box sx={{ justifySelf: "end" }}>
          {isSmallScreen ? (
            <IconButton
              aria-label="Inställningar"
              aria-haspopup="true"
              aria-expanded={menuAnchor !== null}
              onClick={(event) => setMenuAnchor(event.currentTarget)}
            >
              <SettingsIcon />
            </IconButton>
          ) : (
            <ToggleButtonGroup
              size="medium"
              exclusive
              onChange={(_event, newMode: ThemeMode) => {
                setMode(newMode);
              }}
              value={mode}
            >
              {THEME_MODES.map((themeMode) => (
                <ToggleButton
                  key={themeMode.value}
                  value={themeMode.value}
                  disabled={mode === themeMode.value}
                  aria-label={themeMode.label}
                >
                  {themeMode.icon}
                </ToggleButton>
              ))}
            </ToggleButtonGroup>
          )}
        </Box>
      </Toolbar>

      <Menu
        anchorEl={menuAnchor}
        open={menuAnchor !== null}
        onClose={closeMenu}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <ListSubheader>Säsong</ListSubheader>
        {SEASONS.map((season) => (
          <MenuItem
            key={season.id}
            selected={season.id === seasonId}
            onClick={() => {
              setSeasonId(season.id);
              closeMenu();
            }}
          >
            {season.label}
          </MenuItem>
        ))}
        <Divider />
        <ListSubheader>Tema</ListSubheader>
        {THEME_MODES.map((themeMode) => (
          <MenuItem
            key={themeMode.value}
            selected={mode === themeMode.value}
            onClick={() => {
              setMode(themeMode.value);
              closeMenu();
            }}
          >
            <ListItemIcon>{themeMode.icon}</ListItemIcon>
            {themeMode.label}
          </MenuItem>
        ))}
      </Menu>
    </AppBar>
  );
};

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
