import { logger } from '@/lib/logger.lib';
import { InvalidDataError } from '@/lib/error/validation/data.error';
import { z } from 'zod';

export const catchZod = (zod: {
  error: z.ZodError<any>;
  input: any | undefined;
}) => {
  logger.info({ context: 'ZOD', message: zod.error.message });
  throw new InvalidDataError(JSON.parse(zod.error.message));
};
