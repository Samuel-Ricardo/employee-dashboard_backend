import { Container } from 'inversify';
import { ENGINE_MODULE } from '../engine/engine.module';
import { SwaggerModule } from './swagger/swagger.docs';
import { DOCS_REGISTRY } from './docs.registry';

const _MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

export const DOCS_MODULE = Container.merge(_MODULE, ENGINE_MODULE);

DOCS_MODULE.bind(DOCS_REGISTRY.SWAGGER).to(SwaggerModule);
