import { Container } from 'inversify';
import { ENGINE_REGISTRY } from './engine.registry';
import { EXPRESS_ROUTER } from './router/http/express.router';
import { MONGOOSE } from './database/mongodb/mongoose.engine';
import { SWAGGER } from './documentation/swagger.engine';

export const ENGINE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

ENGINE_MODULE.bind(ENGINE_REGISTRY.DOCS.SWAGGER).toConstantValue(SWAGGER);

ENGINE_MODULE.bind(ENGINE_REGISTRY.ROUTER.HTTP.EXPRESS).toConstantValue(
  EXPRESS_ROUTER,
);

ENGINE_MODULE.bind(ENGINE_REGISTRY.DATABASE.MONGODB.MONGOOSE).toConstantValue(
  MONGOOSE,
);
