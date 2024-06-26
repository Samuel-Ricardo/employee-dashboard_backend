import { inject, injectable } from 'inversify';
import { CreateEmployeeUseCase } from '../../use_case/employee/create.use_case';
import { MODULE } from '../../../app.registry';
import { UpdateEmployeeUseCase } from '../../use_case/employee/update.use_case';
import { DeleteEmployeeUseCase } from '../../use_case/employee/delete.use_case';
import { FindOneEmployeeUseCase } from '../../use_case/employee/find/one.use_case';
import { FindAllEmployeeUseCase } from '../../use_case/employee/find/all.use_case';
import { IEmployeeService } from '../../../domain/service/employee.service';
import { ICreateEmployeeDTO } from '../../../domain/DTO/employee/create.dto';
import { IDeleteEmployeeDTO } from '../../../domain/DTO/employee/delete,dto';
import { IFindOneEmployeeDTO } from '../../../domain/DTO/employee/find/one.dto';
import { IUpdateEmployeeDTO } from '../../../domain/DTO/employee/update.dto';

@injectable()
export class EmployeeService implements IEmployeeService {
  constructor(
    @inject(MODULE.APPLICATION.USE_CASE.EMPLOYEE.CREATE)
    private readonly _create: CreateEmployeeUseCase,
    @inject(MODULE.APPLICATION.USE_CASE.EMPLOYEE.UPDATE)
    private readonly _update: UpdateEmployeeUseCase,
    @inject(MODULE.APPLICATION.USE_CASE.EMPLOYEE.DELETE)
    private readonly _delete: DeleteEmployeeUseCase,
    @inject(MODULE.APPLICATION.USE_CASE.EMPLOYEE.FIND.ONE)
    private readonly _findOne: FindOneEmployeeUseCase,
    @inject(MODULE.APPLICATION.USE_CASE.EMPLOYEE.FIND.ALL)
    private readonly _findAll: FindAllEmployeeUseCase,
  ) {}

  async create(DTO: ICreateEmployeeDTO) {
    return this._create.execute(DTO);
  }

  async update(DTO: IUpdateEmployeeDTO) {
    return this._update.execute(DTO);
  }

  async delete(DTO: IDeleteEmployeeDTO) {
    return this._delete.execute(DTO);
  }
  async findOne(DTO: IFindOneEmployeeDTO) {
    return this._findOne.execute(DTO);
  }
  async findAll() {
    return this._findAll.execute();
  }
}
