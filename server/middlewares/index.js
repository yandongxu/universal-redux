import bodyParser from 'koa-bodyparser';
import logger from 'koa-morgan';
import helmet from 'koa-helmet';
// import views from 'koa-nunjucks-next';
import router from './router';

export default {
  bodyParser,
  router,
  helmet,
  logger
};
