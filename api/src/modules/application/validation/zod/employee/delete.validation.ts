import { catchZod } from '../../../../../util/validation/zod/catch.util';
import { z } from 'zod';

export const DeleteEmployeeSchema = z
  .object({
    id: z.string().trim().min(1).catch(catchZod),
  })
  .catch(catchZod);
