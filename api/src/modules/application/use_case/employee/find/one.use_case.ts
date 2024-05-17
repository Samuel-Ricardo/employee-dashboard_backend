import { injectable } from 'inversify';
import { MongooseEmployeeRpositorySupport } from '../../../support/repository/mongoose/employee.support';
import { IFindOneEmployeeDTO } from '../../../../domain/DTO/employee/find/one.dto';

@injectable()
export class FindOneEmployeeUseCase extends MongooseEmployeeRpositorySupport {
  async execute(DTO: IFindOneEmployeeDTO) {
    return await this._repository.findOne(DTO);
  }
}
