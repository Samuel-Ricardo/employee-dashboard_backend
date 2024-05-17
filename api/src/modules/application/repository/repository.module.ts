import { Container } from 'inversify';
import { REPOSITORY_REGISTRY } from './repository.registry';
import { MongooseEmployeeRepository } from './mongoose/employee/MongooseEmployeeRepository';

export const REPOSITORY_MODEL = new Container({
  autoBindInjectable: true,
  defaultScope: 'Singleton',
});

REPOSITORY_MODEL.bind(REPOSITORY_REGISTRY.MONGOOSE.EMPLOYEE).to(
  MongooseEmployeeRepository,
);
