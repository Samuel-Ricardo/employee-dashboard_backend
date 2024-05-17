import { logger } from '../../../../../lib/logger.lib';
import MONGOOSE from 'mongoose';

const mongoURI: string = 'mongodb://localhost:27017/minha-base-de-dados';

MONGOOSE.connect(mongoURI);

MONGOOSE.connection.once('error', () =>
  logger.error(
    {
      context: 'DATABASE',
      message: `MongoDB connection error: ${mongoURI}`,
    },
    { MONGOOSE },
  ),
);
MONGOOSE.connection.once('open', () => {
  () =>
    logger.info(
      { context: 'DATABASE', message: `MongoDB connected to ${mongoURI}` },
      { MONGOOSE },
    );
});

export { MONGOOSE };
