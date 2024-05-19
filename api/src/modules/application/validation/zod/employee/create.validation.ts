import { catchZod } from '../../../../../util/validation/zod/catch.util';
import { z } from 'zod';

export const CreateEmployeeSchema = z
  .object({
    name: z.string().trim().min(1).catch(catchZod),
    role: z.string().trim().min(1).catch(catchZod),
    department: z.string().trim().min(1).catch(catchZod),
    admission_date: z
      .date()
      .or(z.string().trim().min(6, 'invalid date'))
      .catch(catchZod),
  })
  .catch(catchZod);
