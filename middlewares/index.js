const bodyParser = require('koa-bodyparser');
const logger = require('koa-morgan');
const helmet = require('koa-helmet');
// const views = require('koa-nunjucks-next');
const router = require('./router');

module.exports = {
  bodyParser,
  router,
  helmet,
  logger
};
