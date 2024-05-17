import { ENV } from '../../../config/env/env.config';
import { logger } from '../../../../../lib/logger.lib';
import MONGOOSE from 'mongoose';

const mongoURI = ENV.DATABASE.URL || '';

MONGOOSE.connect(mongoURI);

MONGOOSE.connection.once('error', () =>
  logger.error(
    {
      context: 'DATABASE',
      message: `MongoDB connection error: ${mongoURI}`,
    },
    { MONGOOSE: MONGOOSE.connection },
  ),
);
MONGOOSE.connection.once('open', () => {
  () =>
    logger.info(
      { context: 'DATABASE', message: `MongoDB connected to ${mongoURI}` },
      { MONGOOSE: MONGOOSE.connection },
    );
});

export { MONGOOSE };
