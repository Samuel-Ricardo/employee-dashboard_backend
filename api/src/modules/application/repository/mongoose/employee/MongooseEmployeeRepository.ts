import { MODULES } from '../../../../app.factory';
import { EmployeeModel } from '../../../model/mongoose/emplyee.model';
import { ICreateEmployeeDTO } from '../../../../domain/DTO/employee/create.dto';
import { IDeleteEmployeeDTO } from '../../../../domain/DTO/employee/delete,dto';
import { IFindOneEmployeeDTO } from '../../../../domain/DTO/employee/find/one.dto';
import { IUpdateEmployeeDTO } from '../../../../domain/DTO/employee/update.dto';
import { Employee } from '../../../../domain/entity/employee/employee.entity';
import { IEmployeeRepository } from '../../../../domain/repository/employee.repository';
import { injectable } from 'inversify';
import { MongoDBError } from '../../../../../lib/error/database/mongodb.error';

@injectable()
export class MongooseEmployeeRepository implements IEmployeeRepository {
  constructor() {
    MODULES.INFRA.ENGINE.DATABASE.MONGODB.MONGOOSE();
  }

  async create(DTO: ICreateEmployeeDTO) {
    try {
      const employee = new EmployeeModel(DTO);
      const { _id } = await employee.save();
      return {
        id: _id.toString(),
      };
    } catch (err: any) {
      throw new MongoDBError('Error on Create Employee', 500, err);
    }
  }

  async update(DTO: IUpdateEmployeeDTO) {
    try {
      await EmployeeModel.findByIdAndUpdate(DTO.id, DTO, { new: true });
    } catch (err: any) {
      throw new MongoDBError('Error on Update Employee', 500, err);
    }
  }

  async delete({ id }: IDeleteEmployeeDTO) {
    try {
      await EmployeeModel.findByIdAndDelete(id);
    } catch (err: any) {
      throw new MongoDBError('Error on Delete Employee', 500, err);
    }
  }
  async findOne({ id }: IFindOneEmployeeDTO) {
    try {
      const result = await EmployeeModel.findById(id);
      if (!result) throw new MongoDBError('Employee not found');

      return Employee.fromDTO({
        id: result._id.toString(),
        name: result.name,
        role: result.role,
        department: result.department,
        admission_date: result.admission_date,
      });
    } catch (err: any) {
      throw new MongoDBError('Error on FindOne Employee', 500, err);
    }
  }

  async findAll() {
    try {
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
    } catch (err: any) {
      throw new MongoDBError('Error on FindAll Employee', 500, err);
    }
  }
}
