import React from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#ff5824",
    secondary: "#06B49A",
    textPrimary: "#36313D",
    textSecondary: "#AFDBD2",
    accent: "#d0d0d0",
  },
  fonts: ["sans-serif", "Montserrat"],
  fontSizes: {
    small: "12px",
    medium: "16px",
    large: "20px",
  },
};

export default function Theme({ children }: { children: React.ReactNode }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
