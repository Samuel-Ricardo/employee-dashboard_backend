import { Container } from 'inversify';
import { ENGINE_MODULE } from '../engine/engine.module';
import { SwaggerModule } from './swagger/swagger.docs';
import { DOCS_REGISTRY } from './docs.registry';

export const DOCS_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

DOCS_MODULE.bind(DOCS_REGISTRY.SWAGGER).to(SwaggerModule);
