import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals.js";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";

const theme = createTheme({
  typography: {
    allVariants: {
      color: "rgba(0, 0, 0, 0.9)", // Replace with your custom color
    },
  },
  palette: {
    background: {
      default: "#D8F3DC",
    },
    primary: {
      main: "#2C417A",
    },
    secondary: {
      main: "#F1F5F9",
    },
    darkGray: {
      main: "#334155",
    },
    lightGray: {
      main: "#CBD5E1",
    },
    secondaryForeground: {
      main: "#0F172A",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
