import { ICreateEmployeeDTO } from '../DTO/employee/create.dto';
import { IDeleteEmployeeDTO } from '../DTO/employee/delete,dto';
import { IUpdateEmployeeDTO } from '../DTO/employee/update.dto';
import { Employee } from '../entity/employee/employee.entity';

export interface IEmployeeRepository {
  create(DTO: ICreateEmployeeDTO): Promise<void>;
  update(DTO: IUpdateEmployeeDTO): Promise<void>;
  delete(DTO: IDeleteEmployeeDTO): Promise<void>;
  find(DTO: IGetEmployeeDTO): Promise<Employee>;
  findAll(): Promise<Employee[]>;
}
