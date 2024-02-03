import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom/dist";
import App from "./App";
import { store } from "./store";
import { roadmap } from "./theme";

const rootElement = document.getElementById("root") as Element;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
      <ChakraProvider theme={roadmap}>
        <App />
        </ChakraProvider>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
