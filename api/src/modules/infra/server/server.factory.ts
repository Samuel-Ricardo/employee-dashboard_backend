import { Express } from 'express';
import { SERVER_MODULE } from './server.module';
import { SERVER_REGISTRY } from './server.registry';

export const SERVER_FACTORY = {
  HTTP: () => SERVER_MODULE.get<Express>(SERVER_REGISTRY.HTTP.EXPRESS),
  CORS: () => SERVER_MODULE.get<>(SERVER_REGISTRY.HTTP.CORS),
  PARSER: {
    BODY: () =>
      SERVER_MODULE.get<typeof BODY_PARSER>(SERVER_REGISTRY.HTTP.PARSER.BODY),
  },
};
