import { SWAGGER_ENGINE } from '@/@types/module/infra/engine/docs/swagger.type';
import { MODULE } from '@/modules/app.registry';
import { inject, injectable } from 'inversify';

@injectable()
export class SwaggerModule {
  constructor(
    @inject(MODULE.INFRA.ENGINE.DOCS.SWAGGER)
    private readonly _engine: SWAGGER_ENGINE,
  ) {}
}
