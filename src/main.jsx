import React from "react";
import ReactDOM from "react-dom/client";
import "@mantine/core/styles.css";
import App from "./App.jsx";
import "./index.css";
import { MantineProvider, createTheme } from "@mantine/core";
import { CharacterAnimsProvider } from "./contexts/CharacterAnims.jsx";

const theme = createTheme({
  body: {
    width: "100vw",
    height: "100vh",
  },
  "#root": {
    width: "100%",
    height: "100%",
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider withGlobalClasses theme={theme}>
      <CharacterAnimsProvider>
        <App />
      </CharacterAnimsProvider>
    </MantineProvider>
  </React.StrictMode>
);
