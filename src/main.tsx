import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "@kofile/gds-foundations";
import "@kofile/gds-foundations/utilities";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
