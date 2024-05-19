import { MODULE } from '@/modules/app.registry';
import { IDocumentationModule } from '@/modules/infra/documentation/docs.interface';
import { RequestHandler, Router } from 'express';
import { interfaces } from 'inversify';

export const EXPRESS_DOCS_ROUTER = ({ container }: interfaces.Context) => {
  const ROUTER = container.get<Router>(MODULE.INFRA.ENGINE.ROUTER.HTTP.EXPRESS);

  const DOCS = container.get<
    IDocumentationModule<RequestHandler, RequestHandler>
  >(MODULE.INFRA.DOCS.SWAGGER);

  ROUTER.use('/api_docs', DOCS.server(), DOCS.setup());

  return ROUTER;
};
