/* eslint-disable unicorn/prevent-abbreviations */
export function CheckEnvironmentVariables(...requiredEnvVariables:string[])
{
    const missingEnvVariables = requiredEnvVariables.filter(variable => !process.env[variable] || process.env[variable] === '');
    if (missingEnvVariables.length > 0)
    {
        throw new Error(`Missing environment variables: ${missingEnvVariables.join(', ')}`);
    }
}