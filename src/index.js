import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";

const rootId = document.getElementById("root");
const root = createRoot(rootId);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

process.env.NODE_ENV === "production"
  ? serviceWorkerRegistration.register()
  : serviceWorkerRegistration.unregister();
reportWebVitals();
