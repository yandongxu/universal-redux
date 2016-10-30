const Router = require('koa-router');
const pages = require('../controllers/pages');

const router = new Router();

router.get('/', pages.home);

module.exports = router;