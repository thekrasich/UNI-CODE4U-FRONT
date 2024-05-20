import { createTheme } from "@mui/material/styles";
const overrides = {
  palette: {
    primary: { main: "#404040" },
    secondary: { main: "#ff4747" },
    success: { main: "#4caf50" },
    info: { main: "#00d5ff" },
    danger: { main: "#FF5722" },
    warning: { main: "#FFC107" },
    dark: { main: "#22414d" },
    light: {
      main: "#f5f7f7",
      darker: "#f0f0f0",
    },
  },
};

export const theme = createTheme(overrides);
