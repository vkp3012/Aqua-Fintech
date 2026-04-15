import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "light",
    primary:    { main: "#1A3C8F" },
    secondary:  { main: "#F47B20" },
    background: { default: "#F7F9FC", paper: "#FFFFFF" },
    text:       { primary: "#0D1B3E", secondary: "#5A6A85" },
    brand: {
      navy:   "#1A3C8F",
      orange: "#F47B20",
      dark:   "#0D1B3E",
      muted:  "#5A6A85",
      light:  "#F7F9FC",
    },
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", sans-serif',
    h1: { fontFamily: '"Syne", sans-serif', fontWeight: 800 },
    h2: { fontFamily: '"Syne", sans-serif', fontWeight: 700 },
    h3: { fontFamily: '"Syne", sans-serif', fontWeight: 700 },
    h4: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
    h5: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
    h6: { fontFamily: '"Syne", sans-serif', fontWeight: 600 },
  },
  breakpoints: {
    values: { xs: 0, sm: 480, md: 768, lg: 1024, xl: 1280 },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 600,
          fontSize: "0.9rem",
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;