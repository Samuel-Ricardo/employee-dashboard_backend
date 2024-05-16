import { IEmployeeDTO } from '../../DTO/employee/employee.dto';

export class User {
  constructor(
    private _name: string,
    private _role: string,
    private _department: string,
    private _admission_date: Date,
  ) {}

  toDTO(): IEmployeeDTO {
    return {
      name: this._name,
      role: this._role,
      department: this._department,
      admission_date: this._admission_date,
    };
  }

  static fromDTO(DTO: IEmployeeDTO) {
    return new User(DTO.name, DTO.role, DTO.department, DTO.admission_date);
  }
}
