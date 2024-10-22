/* eslint-disable no-useless-escape */
/* eslint-disable no-misleading-character-class */
/* eslint-disable unicorn/better-regex */
import { extname } from 'node:path';
import { randomBytes } from 'node:crypto';

export const createSlug = (string: string) =>
{
    return string.replaceAll(/[\/!"#$%&'()*+.:;<>?@^_`~«»،ءًٌٍُِ]+/g, '').replaceAll(/\s+/g, '-');
};

export function GenerateRandomByte(size: number)
{
    return randomBytes(size).toString('hex');
}

export function GenerateName(originalName: string)
{
    const name = originalName.split(extname(originalName))[0];
    const time = Date.now();
    return `${name}_${GenerateRandomByte(6)}_${time}${extname(originalName)}`;
}

export function CheckBoolean(bool:string)
{
    if (bool.toLowerCase() === 'true')
    {
        return true;
    }
    else
        return false;
}