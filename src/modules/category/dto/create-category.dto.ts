import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreateCategoryDTO
{
    @ApiProperty()
    title: string;
    @ApiPropertyOptional({ nullable: true })
    slug: string;
    @ApiProperty({ format: 'binary', description: 'Type should be PNG / JPG' })
    image: string;
    @ApiProperty({ type:'boolean' })
    show: string;
    @ApiPropertyOptional()
    parent_id: number;
}