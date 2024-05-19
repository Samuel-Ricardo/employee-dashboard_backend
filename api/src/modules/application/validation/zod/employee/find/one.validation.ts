import { catchZod } from '../../../../../../util/validation/zod/catch.util';
import { z } from 'zod';

export const FindOneEmployeeSchema = z
  .object({
    id: z.string().trim().min(1, "id can't be empty").catch(catchZod),
  })
  .catch(catchZod);
