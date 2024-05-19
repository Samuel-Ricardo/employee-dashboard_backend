import { AppError } from '../app.error';

export class MongoDBError extends AppError {
  constructor(
    public message: string = 'Database Error',
    public status: number = 500,
    public data?: any,
    public error: boolean = true,
  ) {
    super(message, status, data, error);
  }
}
