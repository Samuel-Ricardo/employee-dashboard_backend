import { Router } from 'express';
import { ENGINE_MODULE } from './engine.module';
import { ENGINE_REGISTRY } from './engine.registry';

export const ENGINE_FACTORY = {
  ROUTER: {
    HTTP: {
      EXPRESS: () =>
        ENGINE_MODULE.get<Router>(ENGINE_REGISTRY.ROUTER.HTTP.EXPRESS),
    },
  },
};
