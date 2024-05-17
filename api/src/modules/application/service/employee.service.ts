import { inject, injectable } from 'inversify';
import { CreateEmployeeUseCase } from '../use_case/employee/create.use_case';
import { MODULE } from '@/modules/app.registry';
import { UpdateEmployeeUseCase } from '../use_case/employee/update.use_case';
import { DeleteEmployeeUseCase } from '../use_case/employee/delete.use_case';
import { FindOneEmployeeUseCase } from '../use_case/employee/find/one.use_case';
import { FindAllEmployeeUseCase } from '../use_case/employee/find/all.use_case';
import { IEmployeeService } from '@/modules/domain/service/employee.service';

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
}
