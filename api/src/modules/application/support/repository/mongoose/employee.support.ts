import { MODULE } from '../../../../app.registry';
import { injectRepository } from '../../../repository/repository.module';
import { IEmployeeRepository } from '../../../../domain/repository/employee.repository';
import { injectable } from 'inversify';

@injectable()
export abstract class MongooseEmployeeRpositorySupport {
  @injectRepository(MODULE.APPLICATION.REPOSITORY.MONGOOSE.EMPLOYEE)
  protected readonly _repository!: IEmployeeRepository;
}
