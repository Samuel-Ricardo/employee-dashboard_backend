import { Container } from 'inversify';
import { ROUTER_REGISTRY } from './router.registry';
import { EXPRESS_APP_ROUTER } from './http/express/app.router';

export const ROUTER_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

ROUTER_MODULE.bind(ROUTER_REGISTRY.HTTP.EXPRESS.APP).toConstantValue(
  EXPRESS_APP_ROUTER,
);
