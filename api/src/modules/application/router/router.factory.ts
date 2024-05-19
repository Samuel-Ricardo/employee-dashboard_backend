import { Router } from 'express';
import { ROUTER_MODULE } from './router.module';
import { ROUTER_REGISTRY } from './router.registry';

export const ROUTER_FACTORY = {
  HTTP: {
    EXPRESS: {
      APP: () => ROUTER_MODULE.get<Router>(ROUTER_REGISTRY.HTTP.EXPRESS.APP),
      EMPLOYEE: () =>
        ROUTER_MODULE.get<Router>(ROUTER_REGISTRY.HTTP.EXPRESS.EMPLOYEE),
      DOCS: () => ROUTER_MODULE.get<Router>(ROUTER_REGISTRY.HTTP.EXPRESS.DOCS),
    },
  },
};
