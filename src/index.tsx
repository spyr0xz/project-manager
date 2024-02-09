import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { BrowserRouter } from "react-router-dom";
import "./app/styles/index.scss";
import StoreProvider from "./app/providers/storeProvider/storeProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StoreProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StoreProvider>
);
