/* eslint-disable unicorn/filename-case */
import { PartialType } from '@nestjs/swagger';
import { CreateCategoryDTO } from './create-category.dto';
import { IsNotEmpty, IsString, IsUUID } from 'class-validator';

export class UpdateCategoryDto extends PartialType(CreateCategoryDTO)
{
    @IsUUID()
    @IsNotEmpty()
    @IsString()
    id: string;
}

