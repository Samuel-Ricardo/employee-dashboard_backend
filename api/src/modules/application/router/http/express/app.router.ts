import { TRY } from '@/util/try.util';
import { MODULE } from '../../../../app.registry';
import { Router } from 'express';
import { interfaces } from 'inversify';

export const EXPRESS_APP_ROUTER = ({ container }: interfaces.Context) => {
  const APP_ROUTER = container.get<Router>(
    MODULE.INFRA.ENGINE.ROUTER.HTTP.EXPRESS,
  );

  APP_ROUTER.get('/', (req, res, next) =>
    TRY(() => res.send({ data: 'Hello World! :D' }), next),
  );

  return APP_ROUTER;
};
