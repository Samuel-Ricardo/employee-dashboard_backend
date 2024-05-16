import { Router } from 'express';
import { ENGINE_MODULE } from './engine.module';
import { ENGINE_REGISTRY } from './engine.registry';
import { MONGOOSE_TYPE } from '@/@types/module/infra/engine/database/mongodb/mongoose.type';

export const ENGINE_FACTORY = {
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
