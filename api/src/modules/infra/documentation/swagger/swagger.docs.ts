import { SWAGGER_ENGINE } from '@/@types/module/infra/engine/docs/swagger.type';
import { MODULE } from '@/modules/app.registry';
import { inject, injectable } from 'inversify';
import { IDocumentationModule } from '../docs.interface';
import { RequestHandler } from 'express';

import DOCUMENTATION from '../../../../../docs/swagger.json';

@injectable()
export class SwaggerModule
  implements IDocumentationModule<RequestHandler, RequestHandler>
{
  constructor(
    @inject(MODULE.INFRA.ENGINE.DOCS.SWAGGER)
    private readonly _engine: SWAGGER_ENGINE,
  ) {}

  server(): RequestHandler {
    return this._engine.serve as any;
  }

  setup(): RequestHandler {
    return this._engine.setup(DOCUMENTATION);
  }
}
