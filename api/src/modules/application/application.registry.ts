import { MIDDLEWARE_REGISTRY } from './middleware/middleware.registry';
import { ROUTER_REGISTRY } from './router/router.registry';

export const APPLICATION_MODULE = {
  ROUTER: ROUTER_REGISTRY,
  MIDDLEWARE: MIDDLEWARE_REGISTRY,
};
