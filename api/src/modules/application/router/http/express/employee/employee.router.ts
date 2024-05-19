import { MODULE } from '../../../../../app.registry';
import { EmployeeController } from '../../../../../application/controller/employee/employee.controller';
import { TRY } from '../../../../../../util/try.util';
import { Router } from 'express';
import { interfaces } from 'inversify';
import { ZOD_VALIDATION_MIDDLEWARE_TYPE } from '../../../../../../@types/module/application/middleware/validation/zod.type';
import { FindOneEmployeeSchema } from '../../../../validation/zod/employee/find/one.validation';

export const EXPRESS_EMPLOYEE_ROUTER = ({ container }: interfaces.Context) => {
  const VALIDATION_MIDDLEWARE = container.get<ZOD_VALIDATION_MIDDLEWARE_TYPE>(
    MODULE.APPLICATION.MIDDLEWARE.VALIDATION.ZOD,
  );

  const APP_ROUTER = container.get<Router>(
    MODULE.INFRA.ENGINE.ROUTER.HTTP.EXPRESS,
  );

  const EMPLOYEE = container.get<EmployeeController>(
    MODULE.APPLICATION.CONTROLLER.EMPLOYEE,
  );

  APP_ROUTER.get('/api/employees/', async (req, res, next) => {
    try {
      return res.status(200).send(await EMPLOYEE.findAll());
    } catch (error) {
      next(error);
    }
  });

  APP_ROUTER.get(
    '/api/employees/:id',
    VALIDATION_MIDDLEWARE(FindOneEmployeeSchema),
    async (req, res, next) => {
      try {
        return res
          .status(200)
          .send(await EMPLOYEE.findOne({ id: req.params.id }));
      } catch (error) {
        next(error);
      }
    },
  );

  APP_ROUTER.post('/api/employees/', async (req, res, next) => {
    try {
      return res.status(201).send(await EMPLOYEE.create(req.body));
    } catch (error) {
      next(error);
    }
  });

  APP_ROUTER.put('/api/employees/:id', async (req, res, next) => {
    try {
      return res
        .status(204)
        .send(await EMPLOYEE.update({ ...req.params, ...req.body }));
    } catch (error) {
      next(error);
    }
  });

  APP_ROUTER.delete('/api/employees/:id', async (req, res, next) => {
    try {
      return res.status(204).send(await EMPLOYEE.delete(req.params));
    } catch (error) {
      next(error);
    }
  });

  return APP_ROUTER;
};
