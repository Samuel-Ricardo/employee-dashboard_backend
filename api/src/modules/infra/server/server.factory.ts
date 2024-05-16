import { Express } from 'express';
import { SERVER_MODULE } from './server.module';
import { SERVER_REGISTRY } from './server.registry';

import { EXPRESS_CORS_TYPE } from '@/@types/module/infra/server/http/express/cors.type';
import { EXPRESS_BODY_PARSER_TYPE } from '@/@types/module/infra/server/http/express/parser/body.type';

export const SERVER_FACTORY = {
  HTTP: {
    EXPRESS: () => SERVER_MODULE.get<Express>(SERVER_REGISTRY.HTTP.EXPRESS),
    CORS: () => SERVER_MODULE.get<EXPRESS_CORS_TYPE>(SERVER_REGISTRY.HTTP.CORS),
    PARSER: {
      BODY: () =>
        SERVER_MODULE.get<EXPRESS_BODY_PARSER_TYPE>(
          SERVER_REGISTRY.HTTP.PARSER.BODY,
        ),
    },
  },
};
