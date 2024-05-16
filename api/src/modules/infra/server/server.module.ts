import { Container } from 'inversify';
import { SERVER_REGISTRY } from './server.registry';
import { EXPRESS_SERVER } from './htpp/express/express.server';
import { CORS } from './htpp/express/cors';
import { BODY_PARSER } from './htpp/express/body.parser';

export const SERVER_MODULE = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

SERVER_MODULE.bind(SERVER_REGISTRY.HTTP.EXPRESS).toConstantValue(
  EXPRESS_SERVER,
);
SERVER_MODULE.bind(SERVER_REGISTRY.HTTP.CORS).toConstantValue(CORS);
SERVER_MODULE.bind(SERVER_REGISTRY.HTTP.PARSER.BODY).toConstantValue(
  BODY_PARSER,
);
