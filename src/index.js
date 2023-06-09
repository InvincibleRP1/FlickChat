import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App";

import { makeServer } from "./server";
import { SocialDetailsHandler } from "./contexts/dataContext";
import { AuthHandler } from "./contexts/authContext";
import { BookmarkHandler } from "./contexts/bookmarksContext";

// Call make Server
makeServer();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthHandler>
        <SocialDetailsHandler>
          <BookmarkHandler>
          <App />
          </BookmarkHandler>
        </SocialDetailsHandler>
      </AuthHandler>
    </BrowserRouter>
  </React.StrictMode>
);
