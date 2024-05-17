import { IEmployeeService } from '@/modules/domain/service/employee.service';
import { injectable } from 'inversify';

@injectable()
export class EmployeeController {
  constructor(private readonly _service: IEmployeeService) {}
}
