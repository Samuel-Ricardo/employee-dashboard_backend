import { Container } from 'inversify';
import { ENGINE_REGISTRY } from './engine.registry';
import { EXPRESS_ROUTER } from './router/http/express.router';

export const ENGINE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

ENGINE_MODULE.bind(ENGINE_REGISTRY.ROUTER.HTTP.EXPRESS).toConstantValue(
  EXPRESS_ROUTER,
);
