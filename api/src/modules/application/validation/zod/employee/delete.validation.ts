import { catchZod } from '../../../../../util/validation/zod/catch.util';
import { z } from 'zod';

export const FindOneEmployeeSchema = z
  .object({
    id: z.string().catch(catchZod),
  })
  .catch(catchZod);
