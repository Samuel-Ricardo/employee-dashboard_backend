import { Container } from 'inversify';
import { ROUTER_REGISTRY } from './router.registry';
import { EXPRESS_APP_ROUTER } from './http/express/app.router';
import { ENGINE_MODULE } from '../../infra/engine/engine.module';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const ROUTER_MODULE = Container.merge(_MODULE, ENGINE_MODULE);

ROUTER_MODULE.bind(ROUTER_REGISTRY.HTTP.EXPRESS.APP)
  .toDynamicValue(EXPRESS_APP_ROUTER)
  .inSingletonScope();
