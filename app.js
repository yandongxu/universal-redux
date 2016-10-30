const Koa = require('koa');
const middlewares = require('./middlewares');

const app = new Koa();

// assign router to context
// app.context.router = middlewares.router;

// Secure cookies
app.keys = ['hush', '!'];

// Logger
app.use(middlewares.logger('combined'));

// Helmet
app.use(middlewares.helmet());

// Bodyparser
app.use(middlewares.bodyParser());

// Routes
app
  .use(middlewares.router.routes())
  .use(middlewares.router.allowedMethods());

// Error handling
app.on('error', (err, ctx) => {
  console.log('server error:', err, ctx);
});

app.listen(3000, () => console.log('http://localhost:3000'));