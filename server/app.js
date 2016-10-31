const path = require('path');
import Koa from 'koa';
import React from 'react';
import serve from 'koa-static';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import middlewares from './middlewares';
import routes from '../shared/routes';

const app = new Koa();

// Secure cookies
app.keys = ['hush', '!'];

// Logger
app.use(middlewares.logger('combined'));

// Helmet
app.use(middlewares.helmet());

// Bodyparser
app.use(middlewares.bodyParser());

// Serve static
app.use(serve(path.resolve(__dirname, '..', 'public')));

// React-router
app.use(async (ctx) => {
  match({ routes, location: ctx.url }, (error, redirectLocation, renderProps) => {
    const markup = renderToString(<RouterContext {...renderProps} />);
    const body = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
      <meta charset="UTF-8">
      <title>Document</title>
      </head>
      <body>
      <div id="root">${markup}</div>
      <!-- js -->
      <script src="scripts/client.js"></script>
      </body>
      </html>`;
    
    if (error) {
      // error 500
      ctx.status = 500;
      ctx.body = error.message;
    } else if (redirectLocation) {
      // error 302
      ctx.status = 302;
      ctx.redirect(redirectLocation.pathname + redirectLocation.search);
    } else if (renderProps) {
      // 200
      const markup = renderToString(<RouterContext {...renderProps} />);
      ctx.body = body;
    } else {
      // 404
      ctx.status = 404;
      ctx.body = 'Not found';
    }
  })
});

// Error handling
app.on('error', (err, ctx) => {
  console.log('server error:', err, ctx);
});

app.listen(3000, () => console.log('http://localhost:3000'));

module.exports = app;