import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme, CssBaseline } from "@mui/material";
import App from "./App";
import { getPalette } from "./components/helpers/getPalette";
import { LATE_AUTUMN_PALETTE } from "./constants/palette";

const primary = {
  main: getPalette()?.[0] || LATE_AUTUMN_PALETTE[0],
};

const secondary = {
  main: getPalette()?.[1] || LATE_AUTUMN_PALETTE[1],
};

const darkTheme = createTheme({
  colorSchemes: {
    dark: {
      palette: {
        mode: "dark",
        primary: { ...primary },
        secondary: { ...secondary },
      },
    },
  },
  palette: {
    primary: { ...primary },
    secondary: { ...secondary },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
