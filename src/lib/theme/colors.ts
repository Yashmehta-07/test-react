import { common } from "@mui/material/colors";
import { PaletteColorOptions, alpha } from "@mui/material/styles";

const withAlphas = (color: PaletteColorOptions) => {
  return {
    ...color,
    alpha4: alpha(color.main, 0.04),
    alpha8: alpha(color.main, 0.08),
    alpha12: alpha(color.main, 0.12),
    alpha30: alpha(color.main, 0.3),
    alpha50: alpha(color.main, 0.5),
  };
};

export const neutral = {
  50: "#F8F8F8",
  100: "#E9E8E8",
  200: "#E5E7EB",
  300: "#A7A4A2",
  400: "#9DA4AE",
  500: "#504945",
  600: "#4D5761",
  700: "#241C17",
  800: "#1C2536",
  900: "#070605",
};

export const primary = withAlphas({
  lightest: "#F7E6E4",
  light: "#C44736",
  main: "#9D392B",
  dark: "#762B20",
  darkest: "#762B20",
  contrastText: common.white,
});

export const success = withAlphas({
  lightest: "#F4FAE9",
  light: "#F4FAE9",
  main: "#8CB43D",
  dark: "#627D2A",
  darkest: "#627D2A",
  contrastText: common.white,
});

export const info = withAlphas({
  lightest: "#EDF7FF",
  light: "#EDF7FF",
  main: "#A4D8FF",
  dark: "#7297B2",
  darkest: "#164C63",
  contrastText: neutral[900],
});

export const warning = withAlphas({
  lightest: "#FFFAEB",
  light: "#FFFAEB",
  main: "#FFD154",
  dark: "#B2923A",
  darkest: "#B2923A",
  contrastText: neutral[900],
});

export const error = withAlphas({
  lightest: "#F7E6E4",
  light: "#F7E6E4",
  main: "#FE1414",
  dark: "#B10E0E",
  darkest: "#B10E0E",
  contrastText: common.white,
});
