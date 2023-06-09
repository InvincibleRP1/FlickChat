import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { makeServer } from "./server";
import { SocialDetailsHandler } from "./contexts/dataContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SocialDetailsHandler>
        <App />
      </SocialDetailsHandler>
    </BrowserRouter>
  </React.StrictMode>
);
