import { MODULES } from '@/modules/app.factory';

const APP_ROUTER = MODULES.INFRA.ENGINE.ROUTER.HTTP.EXPRESS();

APP_ROUTER.get('/', (req, res) => {
  res.send('Hello World! :D');
});

export { APP_ROUTER };
