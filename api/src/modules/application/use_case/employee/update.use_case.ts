import { injectable } from 'inversify';
import { MongooseEmployeeRpositorySupport } from '../../support/repository/mongoose/employee.support';
import { IUpdateEmployeeDTO } from '../../../domain/DTO/employee/update.dto';

@injectable()
export class UpdateEmployeeUseCase extends MongooseEmployeeRpositorySupport {
  async execute(DTO: IUpdateEmployeeDTO) {
    return await this._repository.update(DTO);
  }
}
