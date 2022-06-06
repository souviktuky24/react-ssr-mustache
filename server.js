/* eslint no-console: "off" */

import React from 'react';
import ReactDomServer from 'react-dom/server';
import express from 'express';
import App from './components/App.jsx';

const mustache = require('mustache-express')

const app = express();
const port = 3000;

app.engine('mustache', mustache());
app.set("view engine", "mustache");

// We create a "route" for the root url "/" what will render a template
app.get("/", (request, response) => {

  const component = <App />;
  const content = ReactDomServer.renderToString(component);
    response.render("index",{content});
});

app.listen(port, () => {
  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
