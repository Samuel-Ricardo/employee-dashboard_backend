import { MODULE } from '@/modules/app.registry';
import { injectRepository } from '@/modules/application/repository/repository.module';
import { IEmployeeRepository } from '@/modules/domain/repository/employee.repository';
import { injectable } from 'inversify';

@injectable()
export abstract class MongooseEmployeeRpositorySupport {
  @injectRepository(MODULE.APPLICATION.REPOSITORY.MONGOOSE.EMPLOYEE)
  protected readonly _repository!: IEmployeeRepository;
}
