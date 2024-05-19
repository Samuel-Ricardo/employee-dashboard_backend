import dotnev from 'dotenv';

dotnev.config();

export const ENV = {
  ...process.env,
  DATABASE: {
    URL: process.env.DATABASE_URL,
  },
};
