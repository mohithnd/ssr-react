import React from "react";
import { renderToString } from "react-dom/server";
import Routes from "../client/Routes";
import { StaticRouter } from "react-router-dom";
import { Provider } from "react-redux";

export default (req, store) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.path} context={{}}>
        <Routes />
      </StaticRouter>
    </Provider>
  );

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SSR React</title>
  </head>
  <body>
    <div id="root">${content}</div>
  </body>
  <script src="bundle.js"></script>
</html>`;
};
