import { catchZod } from '../../../../../util/validation/zod/catch.util';
import { z } from 'zod';

export const EmployeeSchema = z
  .object({
    id: z.string().trim().min(3).catch(catchZod),
    name: z.string().trim().min(3).catch(catchZod),
    role: z.string().trim().min(3).catch(catchZod),
    department: z.string().trim().min(3).catch(catchZod),
    admission_date: z
      .date()
      .or(z.string().date('invalid date'))
      .catch(catchZod),
  })
  .catch(catchZod);

export type EmployeeValidationData = z.infer<typeof EmployeeSchema>;
