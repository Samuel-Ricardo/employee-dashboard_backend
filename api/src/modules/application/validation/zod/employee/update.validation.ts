import { catchZod } from '@/util/validation/zod/catch.util';
import { z } from 'zod';

export const UpdateEmployeeSchema = z
  .object({
    id: z.string().catch(catchZod),
    name: z.string().optional().catch(catchZod),
    role: z.string().optional().catch(catchZod),
    department: z.string().optional().catch(catchZod),
    admission_date: z
      .date()
      .optional()
      .or(z.string().date('invalid date').optional())
      .catch(catchZod),
  })
  .catch(catchZod);
