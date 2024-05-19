import { catchZod } from '../../../../../util/validation/zod/catch.util';
import { z } from 'zod';

export const CreateEmployeeSchema = z
  .object({
    name: z.string().catch(catchZod),
    role: z.string().catch(catchZod),
    department: z.string().catch(catchZod),
    admission_date: z
      .date()
      .or(z.string().date('invalid date'))
      .catch(catchZod),
  })
  .catch(catchZod);
