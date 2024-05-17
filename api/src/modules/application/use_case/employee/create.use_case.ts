import { injectable } from 'inversify';
import { MongooseEmployeeRpositorySupport } from '../../support/repository/mongoose/employee.support';
import { ICreateEmployeeDTO } from '@/modules/domain/DTO/employee/create.dto';

@injectable()
export class CreateEmployeeUseCase extends MongooseEmployeeRpositorySupport {
  async execute(DTO: ICreateEmployeeDTO) {
    return await this._repository.create(DTO);
  }
}
