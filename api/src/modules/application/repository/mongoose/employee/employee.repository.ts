import { MODULES } from '@/modules/app.factory';
import { ICreateEmployeeDTO } from '@/modules/domain/DTO/employee/create.dto';
import { IDeleteEmployeeDTO } from '@/modules/domain/DTO/employee/delete,dto';
import { IFindOneEmployeeDTO } from '@/modules/domain/DTO/employee/find/one.dto';
import { IUpdateEmployeeDTO } from '@/modules/domain/DTO/employee/update.dto';
import { Employee } from '@/modules/domain/entity/employee/employee.entity';
import { IEmployeeRepository } from '@/modules/domain/repository/employee.repository';
import { injectable } from 'inversify';

@injectable()
export class MongooseEmployeeRepository implements IEmployeeRepository {
  constructor() {
    MODULES.INFRA.ENGINE.DATABASE.MONGODB.MONGOOSE();
  }

  async create(DTO: ICreateEmployeeDTO) {
    throw new Error('Method not implemented.');
  }
  update(DTO: IUpdateEmployeeDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  delete(DTO: IDeleteEmployeeDTO): Promise<void> {
    throw new Error('Method not implemented.');
  }
  findOne(DTO: IFindOneEmployeeDTO): Promise<Employee> {
    throw new Error('Method not implemented.');
  }
  findAll(): Promise<Employee[]> {
    throw new Error('Method not implemented.');
  }
}
