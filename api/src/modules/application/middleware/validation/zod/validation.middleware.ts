import { z } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { NoDataProvidedError } from '../../../../../lib/error/validation/no_data.error';
import { logger } from '../../../../../lib/logger.lib';

export const ZOD_VALIDATION_MIDDLEWARE =
  (schema: z.ZodSchema) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      logger.info(
        { context: 'VALIDATOR', message: 'Data:' },
        { params: req.params, body: req.body },
      );

      if (
        Object.keys({ ...req.body }).length > 0 ||
        Object.keys({ ...req.params }).length > 0
      ) {
        return schema.parse({ ...req.body, ...req.params });
      }

      throw new NoDataProvidedError('No data provided');
    } catch (e) {
      next(e);
    } finally {
      next();
    }
  };
