const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Employee Dashboard API',
    description: 'Employee Dashboard API Information',
  },
  host: 'localhost:3000',
};

const outputFile = './docs/swagger.json';
const routes = [
  './src/server.ts',
  './src/modules/application/router/http/express/employee/employee.router.ts',
  './src/modules/application/router/http/express/app.router.ts',
  './src/modules/application/router/http/express/docs.router.ts',
];

swaggerAutogen(outputFile, routes, doc);
