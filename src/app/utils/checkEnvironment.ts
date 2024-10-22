import { EnvVariables } from '@/common/interfaces/env.variables.interface';

/* eslint-disable unicorn/prevent-abbreviations */

export const envTemplate: EnvVariables = {
    PORT: '',
    DB_PORT: '',
    DB_USERNAME: '',
    DB_PASSWORD: '',
    DB_NAME: '',
    DB_HOST: '',
    S3_BUCKET: '',
    S3_ACCESS_KEY: '',
    S3_SECRET_KEY: '',
    S3_ENDPOINT:'',
};

export function CheckEnvironmentVariables()
{
    const missingEnvVariables = Object.keys(envTemplate).filter(variable => !process.env[variable] || process.env[variable] === '');
    if (missingEnvVariables.length > 0)
    {
        // process.stderr.write(`\u001B[31mMissing environment variables: < ${missingEnvVariables.join(' >, < ')} >\u001B[0m\n`);
        const ErrorMessage = `\u001B[31mMissing environment variables: < ${missingEnvVariables.join(' >, < ')} >\u001B[0m\n`;
        throw new Error(ErrorMessage);
    }
}