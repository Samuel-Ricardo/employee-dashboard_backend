import { catchZod } from '../../../../../util/validation/zod/catch.util';
import { z } from 'zod';

export const CreateEmployeeSchema = z
  .object({
    name: z.string().min(1).catch(catchZod),
    role: z.string().min(1).catch(catchZod),
    department: z.string().min(1).catch(catchZod),
    admission_date: z
      .date()
      .or(z.string().date('invalid date'))
      .catch(catchZod),
  })
  .catch(catchZod);
