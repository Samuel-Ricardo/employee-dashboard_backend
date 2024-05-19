import { EmployeeSchema } from '../../../application/validation/zod/employee/employee.validation';
import { IEmployeeDTO } from '../../DTO/employee/employee.dto';

export class Employee {
  static validate(DTO: IEmployeeDTO) {
    return EmployeeSchema.safeParse(DTO);
  }

  constructor(
    private _id: string,
    private _name: string,
    private _role: string,
    private _department: string,
    private _admission_date: Date,
  ) {
    Employee.validate({
      id: _id,
      name: _name,
      role: _role,
      department: _department,
      admission_date: _admission_date,
    });
  }

  toDTO(): IEmployeeDTO {
    return {
      id: this._id,
      name: this._name,
      role: this._role,
      department: this._department,
      admission_date: this._admission_date,
    };
  }

  static fromDTO(DTO: IEmployeeDTO) {
    return new Employee(
      DTO.id || '',
      DTO.name,
      DTO.role,
      DTO.department,
      DTO.admission_date,
    );
  }
}
