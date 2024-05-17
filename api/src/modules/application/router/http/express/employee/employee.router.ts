import { MODULE } from '@/modules/app.registry';
import { EmployeeController } from '@/modules/application/controller/employee/employee.controller';
import { TRY } from '@/util/try.util';
import { Router } from 'express';
import { interfaces } from 'inversify';

export const EXPRESS_EMPLOYEE_ROUTER = ({ container }: interfaces.Context) => {
  const APP_ROUTER = container.get<Router>(
    MODULE.INFRA.ENGINE.ROUTER.HTTP.EXPRESS,
  );

  const EMPLOYEE = container.get<EmployeeController>(
    MODULE.APPLICATION.CONTROLLER.EMPLOYEE,
  );

  APP_ROUTER.get('/api/employees/', (req, res, next) =>
    TRY(async () => res.status(200).send(await EMPLOYEE.findAll()), next),
  );

  APP_ROUTER.get('/api/employees/:id', (req, res, next) =>
    TRY(
      async () => res.status(200).send(await EMPLOYEE.findOne(req.params)),
      next,
    ),
  );

  APP_ROUTER.post('/api/employees/', (req, res, next) =>
    TRY(
      async () => res.status(201).send(await EMPLOYEE.create(req.body)),
      next,
    ),
  );

  APP_ROUTER.put('/api/employees/:id', (req, res, next) =>
    TRY(
      async () =>
        res
          .status(204)
          .send(await EMPLOYEE.update({ ...req.params, ...req.body })),
      next,
    ),
  );

  APP_ROUTER.delete('/api/employees/:id', (req, res, next) =>
    TRY(
      async () => res.status(204).send(await EMPLOYEE.delete(req.params)),
      next,
    ),
  );

  return APP_ROUTER;
};
