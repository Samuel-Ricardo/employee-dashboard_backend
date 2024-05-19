import { DOCS_MODULE } from './docs.module';
import { DOCS_REGISTRY } from './docs.registry';
import { SwaggerModule } from './swagger/swagger.docs';

export const DOCS_FACTORY = {
  SWAGGER: () => DOCS_MODULE.get<SwaggerModule>(DOCS_REGISTRY.SWAGGER),
};
