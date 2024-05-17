import { CONFIG_TYPE } from '@/@types/module/infra/config/config.type';
import { CONFIG_MODULE } from './config.module';
import { CONFIG_REGISTRY } from './config.registry';
import { ENV_TYPE } from '@/@types/module/infra/config/env.type';

export const CONFIG_FACTORY = {
  CONFIG: CONFIG_MODULE.get<CONFIG_TYPE>(CONFIG_REGISTRY.CONFIG),
  ENV: CONFIG_MODULE.get<ENV_TYPE>(CONFIG_REGISTRY.ENV),
  DATABASE: {
    URL: CONFIG_MODULE.get<string | undefined>(CONFIG_REGISTRY.DATABASE.URL),
  },
};
