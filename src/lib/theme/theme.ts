import { createTheme } from "@mui/material";
import "../../assets/fonts/overlock/overlock-font.css";
import "../../assets/fonts/overpass-mono/overpass-mono-font.css";
import "../../assets/fonts/overpass/overpass-font.css";
import { components } from "./components";
import { palette } from "./palette";
import { typography } from "./typography";
export const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1420,
    },
  },
  palette,
  typography,
  components,
});
