import { MongooseEmployeeRpositorySupport } from '../../../../application/support/repository/mongoose/employee.support';
import { injectable } from 'inversify';

@injectable()
export class FindAllEmployeeUseCase extends MongooseEmployeeRpositorySupport {
  async execute() {
    return await this._repository.findAll();
  }
}
