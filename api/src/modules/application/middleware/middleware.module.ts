import { Container } from 'inversify';
import { MIDDLEWARE_REGISTRY } from './middleware.registry';
import { ERROR_MIDDLEWARE } from './error/error.middleware';
import { LOGGER_MIDDLEWARE } from './log/logger.middleware';
import { ERROR_LOGGER_MIDDLEWARE } from './log/error/logger.middleware';
import { ZOD_VALIDATION_MIDDLEWARE } from './validation/zod/validation.middleware';

export const MIDDLEWARE_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

MIDDLEWARE_MODULE.bind(MIDDLEWARE_REGISTRY.VALIDATION.ZOD).toConstantValue(
  ZOD_VALIDATION_MIDDLEWARE,
);

MIDDLEWARE_MODULE.bind(MIDDLEWARE_REGISTRY.ERROR).toConstantValue(
  ERROR_MIDDLEWARE,
);

MIDDLEWARE_MODULE.bind(MIDDLEWARE_REGISTRY.LOGGER.APP).toConstantValue(
  LOGGER_MIDDLEWARE,
);

MIDDLEWARE_MODULE.bind(MIDDLEWARE_REGISTRY.LOGGER.ERROR).toConstantValue(
  ERROR_LOGGER_MIDDLEWARE,
);
