import { logger } from '@/lib/logger.lib';
import MONGOOSE from 'mongoose';

// URL de conexão com o MongoDB
const mongoURI: string = 'mongodb://localhost:27017/minha-base-de-dados';

// Conecte-se ao MongoDB
MONGOOSE.connect(mongoURI);

// Lidere com erros de conexão
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
