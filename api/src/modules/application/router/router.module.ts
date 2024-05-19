import { Container } from 'inversify';
import { ROUTER_REGISTRY } from './router.registry';
import { EXPRESS_APP_ROUTER } from './http/express/app.router';
import { ENGINE_MODULE } from '../../infra/engine/engine.module';
import { EXPRESS_EMPLOYEE_ROUTER } from './http/express/employee/employee.router';
import { CONTROLLER_MODULE } from '../controller/controller.module';
import { EXPRESS_DOCS_ROUTER } from './http/express/docs.router';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const ROUTER_MODULE = Container.merge(
  _MODULE,
  ENGINE_MODULE,
  CONTROLLER_MODULE,
);

ROUTER_MODULE.bind(ROUTER_REGISTRY.HTTP.EXPRESS.APP)
  .toDynamicValue(EXPRESS_APP_ROUTER)
  .inSingletonScope();

ROUTER_MODULE.bind(ROUTER_REGISTRY.HTTP.EXPRESS.EMPLOYEE)
  .toDynamicValue(EXPRESS_EMPLOYEE_ROUTER)
  .inSingletonScope();

ROUTER_MODULE.bind(ROUTER_REGISTRY.HTTP.EXPRESS.DOCS)
  .toDynamicValue(EXPRESS_DOCS_ROUTER)
  .inSingletonScope();
