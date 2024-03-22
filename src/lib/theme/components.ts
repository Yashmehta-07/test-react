import { ThemeOptions } from "@mui/material";
import { palette } from "./palette";

export const components: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        boxSizing: "border-box",
      },
      html: {
        MozOsxFontSmoothing: "grayscale",
        WebkitFontSmoothing: "antialiased",
        display: "flex",
        flexDirection: "column",
        minHeight: "100%",
        width: "100%",
      },
      body: {
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        minHeight: "100%",
        width: "100%",
      },
      "#root": {
        display: "flex",
        flex: "1 1 auto",
        flexDirection: "column",
        height: "100%",
        width: "100%",
      },
    },
  },
  MuiTabs: {
    styleOverrides: {
      root: {
        "& .MuiTabs-flexContainer": {
          gap: 30,
        },
      },
    },
  },
  MuiTab: {
    styleOverrides: {
      root: {
        fontSize: 16,
        fontWeight: 400,
        lineHeight: 1.71,
        minWidth: "auto",
        textTransform: "none",
        padding: 0,
        color: palette?.neutral["300"],
        "&.Mui-selected": {
          color: palette?.neutral["900"],
          fontSize: 16,
          fontWeight: 700,
        },
      },
    },
  },
  MuiButton: {
    variants: [
      {
        props: { variant: "contained", color: "primary" },
        style: {
          borderRadius: 6,
          fontFamily: "overpass",
          fontSize: 16,
          fontWeight: 700,
          textTransform: "none",
          letterSpacing: "0.03rem",
        },
      },
      {
        props: { variant: "text" },
        style: {
          fontFamily: "overpass",
          textTransform: "none",
          letterSpacing: "0.03rem",
        },
      },
    ],
  },
};
