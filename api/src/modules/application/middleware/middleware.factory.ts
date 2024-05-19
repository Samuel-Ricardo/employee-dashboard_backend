import { ErrorRequestHandler, RequestHandler } from 'express';
import { MIDDLEWARE_MODULE } from './middleware.module';
import { MIDDLEWARE_REGISTRY } from './middleware.registry';
import { ZOD_VALIDATION_MIDDLEWARE_TYPE } from '@/@types/module/application/middleware/validation/zod.type';

export const MIDDLEWARE_FACTORY = {
  VALIDATION: {
    ZOD: () =>
      MIDDLEWARE_MODULE.get<ZOD_VALIDATION_MIDDLEWARE_TYPE>(
        MIDDLEWARE_REGISTRY.VALIDATION.ZOD,
      ),
  },
  ERROR: () =>
    MIDDLEWARE_MODULE.get<ErrorRequestHandler>(MIDDLEWARE_REGISTRY.ERROR),
  LOGGER: {
    APP: () =>
      MIDDLEWARE_MODULE.get<RequestHandler>(MIDDLEWARE_REGISTRY.LOGGER.APP),
    ERROR: () =>
      MIDDLEWARE_MODULE.get<ErrorRequestHandler>(
        MIDDLEWARE_REGISTRY.LOGGER.ERROR,
      ),
  },
};
