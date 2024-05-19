import { catchZod } from '../../../../../util/validation/zod/catch.util';
import { z } from 'zod';

export const UpdateEmployeeSchema = z
  .object({
    id: z.string().trim().min(1).catch(catchZod),
    name: z.string().trim().min(1).optional().catch(catchZod),
    role: z.string().trim().min(1).optional().catch(catchZod),
    department: z.string().trim().min(1).optional().catch(catchZod),
    admission_date: z
      .date()
      .optional()
      .or(z.string().trim().min(6, 'invalid date').optional())
      .catch(catchZod),
  })
  .catch(catchZod);
