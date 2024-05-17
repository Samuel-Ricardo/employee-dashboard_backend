import { injectable } from 'inversify';
import { MongooseEmployeeRpositorySupport } from '../../support/repository/mongoose/employee.support';
import { IDeleteEmployeeDTO } from '../../../domain/DTO/employee/delete,dto';

@injectable()
export class DeleteEmployeeUseCase extends MongooseEmployeeRpositorySupport {
  async execute(DTO: IDeleteEmployeeDTO) {
    return await this._repository.delete(DTO);
  }
}
