import { Router } from 'express';
import { ENGINE_MODULE } from './engine.module';
import { ENGINE_REGISTRY } from './engine.registry';
import { MONGOOSE_TYPE } from '@/@types/module/infra/engine/database/mongodb/mongoose.type';
import { SWAGGER_ENGINE } from '@/@types/module/infra/engine/docs/swagger.type';

export const ENGINE_FACTORY = {
  DOCS: {
    SWAGGER: () =>
      ENGINE_MODULE.get<SWAGGER_ENGINE>(ENGINE_REGISTRY.DOCS.SWAGGER),
  },
  ROUTER: {
    HTTP: {
      EXPRESS: () =>
        ENGINE_MODULE.get<Router>(ENGINE_REGISTRY.ROUTER.HTTP.EXPRESS),
    },
  },
  DATABASE: {
    MONGODB: {
      MONGOOSE: () =>
        ENGINE_MODULE.get<MONGOOSE_TYPE>(
          ENGINE_REGISTRY.DATABASE.MONGODB.MONGOOSE,
        ),
    },
  },
};
