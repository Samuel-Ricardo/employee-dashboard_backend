import { catchZod } from '../../../../../util/validation/zod/catch.util';
import { z } from 'zod';

export const EmployeeSchema = z
  .object({
    id: z.string().catch(catchZod),
    name: z.string().catch(catchZod),
    role: z.string().catch(catchZod),
    department: z.string().catch(catchZod),
    admission_date: z
      .date()
      .or(z.string().date('invalid date'))
      .catch(catchZod),
  })
  .catch(catchZod);

export type EmployeeValidationData = z.infer<typeof EmployeeSchema>;
