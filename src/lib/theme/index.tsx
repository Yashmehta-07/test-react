import { CssBaseline, ThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import { theme } from "./theme";

export const ThemeWrapper = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};
