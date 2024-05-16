export const SERVER_REGISTRY = {
  HTTP: {
    EXPRESS: Symbol.for('MODULE::INFRA::SERVER::HTTP::EXPRESS'),
    CORS: Symbol.for('MODULE::INFRA::SERVER::HTTP::CORS'),
    PARSER: {
      BODY: Symbol.for('MODULE::INFRA::SERVER::HTTP::PARSER::BODY'),
    },
  },
};
