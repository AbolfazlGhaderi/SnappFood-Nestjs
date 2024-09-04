import { extname } from 'node:path';
import { randomBytes } from 'node:crypto';

export const createSlug = (string: string) =>
{
    return string.replaceAll(/[!"#$%&'()*+.:;<>?@^_`~«»،ءًٌٍُِ-]+/g, '')?.replace(/\s+/g, '-');
};

export function GenerateRandomByte(size: number)
{
    return randomBytes(size).toString('hex');
}

export function GenerateName(origialName: string)
{
    const name = origialName.split(extname(origialName))[0];
    const time = Date.now();
    return `${name}_${GenerateRandomByte(6)}_${time}${extname(origialName)}`;
}