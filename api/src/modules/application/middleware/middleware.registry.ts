export const MIDDLEWARE_REGISTRY = {
  ERROR: Symbol.for('MODULE::APP::MIDDLEWARE::ERROR'),
  LOGGER: {
    APP: Symbol.for('MODULE::APP::MIDDLEWARE::LOGGER::APP'),
    ERROR: Symbol.for('MODULE::APP::MIDDLEWARE::LOGGER::ERROR'),
  },
};
