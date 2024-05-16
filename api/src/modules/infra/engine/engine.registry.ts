export const ENGINE_REGISTRY = {
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
