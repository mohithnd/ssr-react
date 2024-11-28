import React from "react";
import { hydrateRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import Routes from "./Routes";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { thunk } from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, {}, applyMiddleware(thunk));

hydrateRoot(
  document.getElementById("root"),
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>
);
