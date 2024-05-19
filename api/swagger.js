const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Employee Dashboard API',
    description: 'Employee Dashboard API Information',
  },
  host: 'localhost:3000',
};

const outputFile = './docs/swagger.json';
const routes = ['./src/app.ts'];

swaggerAutogen(outputFile, routes, doc);
