import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import createDB from "./data/db";
import { SuperStoreDB } from "./data/db";


const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
