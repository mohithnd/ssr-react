import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";

hydrateRoot(
  document.getElementById("root"),
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
);
