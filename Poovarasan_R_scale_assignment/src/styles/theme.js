"use client";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#422f7f",
    },
    scale: {
      main: "#060606",
    },
    secondary: {
      main: "#dc004e",
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          color: "white",
          borderBottom: "1px solid #1c1c1f",
        },
      },
    },
  },
});

export default theme;
