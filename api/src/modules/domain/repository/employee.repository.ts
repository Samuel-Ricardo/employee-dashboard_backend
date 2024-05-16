import { Employee } from '../entity/employee/employee.entity';

export interface IEmployeeRepository {
  create(DTO: ICreateEmployeeDTO): Promise<void>;
  update(DTO: IUpdateEmployeeDTO): Promise<void>;
  delete(DTO: IDeleteEmployeeDTO): Promise<void>;
  get(DTO: IGetEmployeeDTO): Promise<Employee>;
  getAll(): Promise<Employee[]>;
}
