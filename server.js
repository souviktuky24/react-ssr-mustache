/* eslint no-console: "off" */

import React from 'react';
import ReactDomServer from 'react-dom/server';
import MobileDetect from 'mobile-detect';
import express from 'express';
import browserify from 'browserify';
import babelify from 'babelify';
import App from './components/App.jsx';

const mustache = require('mustache-express')

const app = express();
const port = 3000;

// app.get('/bundle.js', (req, res) => {
//   browserify('./client.js', { debug: true }).transform(babelify).bundle().pipe(res);
// });

// app.get('/', (req, res) => {
//   const md = new MobileDetect(req.headers['user-agent']);
//   let fallbackScreenClass = 'xxl';
//   if (md.phone() !== null) fallbackScreenClass = 'xs';
//   if (md.tablet() !== null) fallbackScreenClass = 'md';

//   const component = <App fallbackScreenClass={fallbackScreenClass} />;
//   const content = ReactDomServer.renderToString(component);

//   res.send(`
//     <!DOCTYPE html>
//     <html>
//       <head>
//         <title>React SSR Example</title>
//         <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
//       </head>
//       <body>
//         <div id="app">${content}</div>
//         <script src="bundle.js"></script>
//       </body>
//     </html>
//   `);
//   console.info('react-grid-system example rendered server-side.');
// });

// app.listen(port, () => {
//   console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
// });

app.engine('mustache', mustache());
app.set("view engine", "mustache");

// We create a "route" for the root url "/" what will render a template
app.get("/", (request, response) => {

  const md = new MobileDetect(request.headers['user-agent']);
  let fallbackScreenClass = 'xxl';
  if (md.phone() !== null) fallbackScreenClass = 'xs';
  if (md.tablet() !== null) fallbackScreenClass = 'md';

  const component = <App fallbackScreenClass={fallbackScreenClass} />;
  const content = ReactDomServer.renderToString(component);
    response.render("index",{content});
});

app.listen(port, () => {
  console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
