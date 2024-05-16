import { Container } from 'inversify';
import { SERVER_MODULE } from './server/server.module';
import { ENGINE_MODULE } from './engine/engine.module';

const _MODULE = new Container({ autoBindInjectable: true });

export const INFRA_MODULE = Container.merge(
  _MODULE,
  SERVER_MODULE,
  ENGINE_MODULE,
);
