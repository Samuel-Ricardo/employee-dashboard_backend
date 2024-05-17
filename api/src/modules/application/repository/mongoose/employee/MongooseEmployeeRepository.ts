import { MODULES } from '@/modules/app.factory';
import { EmployeeModel } from '@/modules/application/model/mongoose/emplyee.model';
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
    const employee = new EmployeeModel(DTO);
    const { _id } = await employee.save();
    return {
      id: _id.toString(),
    };
  }

  async update(DTO: IUpdateEmployeeDTO) {
    await EmployeeModel.findByIdAndUpdate(DTO.id, DTO, { new: true });
  }

  async delete({ id }: IDeleteEmployeeDTO) {
    await EmployeeModel.findByIdAndDelete(id);
  }
  async findOne({ id }: IFindOneEmployeeDTO) {
    const result = await EmployeeModel.findById(id);
    if (!result) throw new Error('Employee not found');

    return Employee.fromDTO({
      id: result._id.toString(),
      name: result.name,
      role: result.role,
      department: result.department,
      admission_date: result.admission_date,
    });
  }

  async findAll() {
    const result = await EmployeeModel.find();
    return result.map((employee) =>
      Employee.fromDTO({
        id: employee._id.toString(),
        name: employee.name,
        role: employee.role,
        department: employee.department,
        admission_date: employee.admission_date,
      }),
    );
  }
}
