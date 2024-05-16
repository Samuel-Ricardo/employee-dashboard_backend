import { MODULE } from '../../../../app.registry';
import { Router } from 'express';
import { interfaces } from 'inversify';

export const EXPRESS_APP_ROUTER = ({ container }: interfaces.Context) => {
  const APP_ROUTER = container.get<Router>(
    MODULE.INFRA.ENGINE.ROUTER.HTTP.EXPRESS,
  );

  APP_ROUTER.get('/', (req, res) => {
    res.send('Hello World! :D');
  });

  return APP_ROUTER;
};
