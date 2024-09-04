/* eslint-disable unicorn/escape-case */
/* eslint-disable unicorn/no-hex-escape */
/* eslint-disable unicorn/no-process-exit */
/* eslint-disable security/detect-object-injection */
/* eslint-disable import/no-unresolved */
import { EnvVariables } from '@/common/interfaces/env.variables.interface';

/* eslint-disable unicorn/prevent-abbreviations */
export function CheckEnvironmentVariables(...requiredEnvVariables:(keyof EnvVariables)[])
{
    const missingEnvVariables = requiredEnvVariables.filter(variable => !process.env[variable] || process.env[variable] === '');
    if (missingEnvVariables.length > 0)
    {
        process.stderr.write(`\x1b[31mMissing environment variables: ${missingEnvVariables.join(', ')}\x1b[0m\n`);
        process.exit(1);
    }
}