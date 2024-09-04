import { EnvVariables } from '@/common/interfaces/env.variables.interface';

/* eslint-disable unicorn/prevent-abbreviations */
export function CheckEnvironmentVariables(...requiredEnvVariables:(keyof EnvVariables)[])
{
    const missingEnvVariables = requiredEnvVariables.filter(variable => !process.env[variable] || process.env[variable] === '');
    if (missingEnvVariables.length > 0)
    {
        // process.stderr.write(`\u001B[31mMissing environment variables: < ${missingEnvVariables.join(' >, < ')} >\u001B[0m\n`);
        throw new Error(`\u001B[31mMissing environment variables: < ${missingEnvVariables.join(' >, < ')} >\u001B[0m\n`);
    }
}