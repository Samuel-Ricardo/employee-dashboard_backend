import { Container } from 'inversify';
import { INFRA_MODULE } from './infra/infra.module';
import { ROUTER_MODULE } from './application/router/router.module';
import { APPLICATION_MODULE } from './application/application.module';

const _MODULE = new Container({ autoBindInjectable: true });

export const APP_MODULE = Container.merge(
  _MODULE,
  INFRA_MODULE,
  APPLICATION_MODULE,
);
