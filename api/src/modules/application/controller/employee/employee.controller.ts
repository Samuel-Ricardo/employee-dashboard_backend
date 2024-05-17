import { ICreateEmployeeDTO } from '@/modules/domain/DTO/employee/create.dto';
import { IFindOneEmployeeDTO } from '@/modules/domain/DTO/employee/find/one.dto';
import { IUpdateEmployeeDTO } from '@/modules/domain/DTO/employee/update.dto';
import { IEmployeeService } from '@/modules/domain/service/employee.service';
import { injectable } from 'inversify';

@injectable()
export class EmployeeController {
  constructor(private readonly _service: IEmployeeService) {}

  async create(DTO: ICreateEmployeeDTO) {
    const result = await this._service.create(DTO);
    return { result };
  }

  async update(DTO: IUpdateEmployeeDTO) {
    await this._service.update(DTO);
  }

  async delete(DTO: IUpdateEmployeeDTO) {
    await this._service.delete(DTO);
  }

  async findOne(DTO: IFindOneEmployeeDTO) {
    const result = await this._service.findOne(DTO);
    return { result: result.toDTO() };
  }
}
