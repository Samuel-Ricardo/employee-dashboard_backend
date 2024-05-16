import { ROUTER_FACTORY } from './application/router/router.factory';
import { INFRA_FACTORY } from './infra/infra.factory';

export const MODULES = {
  INFRA: INFRA_FACTORY,
  ROUTER: ROUTER_FACTORY,
};
