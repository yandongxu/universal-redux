import Router from 'koa-router';
import pages from '../controllers/pages';

const router = new Router();

router.get('/', pages.home);

export default router;