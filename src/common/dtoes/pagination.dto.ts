import { ApiPropertyOptional } from '@nestjs/swagger'
import { IsNumberString, IsOptional } from 'class-validator'

export class PaginationDTO
{
    @ApiPropertyOptional({ default: 1 })
    @IsOptional()
    @IsNumberString()
    page:string

    @ApiPropertyOptional({ default: 10 })
    @IsOptional()
    @IsNumberString()
    limit:string
}