import { ICreateEmployeeDTO } from '@/modules/domain/DTO/employee/create.dto';
import { IEmployeeService } from '@/modules/domain/service/employee.service';
import { injectable } from 'inversify';

@injectable()
export class EmployeeController {
  constructor(private readonly _service: IEmployeeService) {}

  async create(DTO: ICreateEmployeeDTO) {
    const result = await this._service.create(DTO);
    return { result };
  }
}
