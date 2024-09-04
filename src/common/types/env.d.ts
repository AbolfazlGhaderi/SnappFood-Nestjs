import { EnvVariables } from '@/common/interfaces/env.variables.interface';

declare global {
    namespace NodeJS {
      interface ProcessEnv extends EnvVariables {}
    }
}