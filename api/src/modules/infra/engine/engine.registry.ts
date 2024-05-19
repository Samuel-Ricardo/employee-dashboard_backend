export const ENGINE_REGISTRY = {
  DOCS: {
    SWAGGER: Symbol.for('MODULE::INFRA::ENGINE::DOCUMENTATION::SWAGGER'),
  },
  ROUTER: {
    HTTP: {
      EXPRESS: Symbol.for('MODULE::INFRA::ENGINE::ROUTER::HTTP::EXPRESS'),
    },
  },
  DATABASE: {
    MONGODB: {
      MONGOOSE: Symbol.for(
        'MODULE::INFRA::ENGINE::DATABASE::MONGODB::MONGOOSE',
      ),
    },
  },
};
