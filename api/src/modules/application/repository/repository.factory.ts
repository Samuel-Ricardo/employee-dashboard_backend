import { IEmployeeRepository } from '@/modules/domain/repository/employee.repository';
import { REPOSITORY_MODEL } from './repository.module';
import { REPOSITORY_REGISTRY } from './repository.registry';

export const REPOSITORY_FACTORY = {
  MONGOOSE: {
    EMPLOYEE: () =>
      REPOSITORY_MODEL.get<IEmployeeRepository>(
        REPOSITORY_REGISTRY.MONGOOSE.EMPLOYEE,
      ),
  },
};
