import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryEntity } from '@/entities/category.entity';

@Injectable()
export class CategoryRepository extends Repository<CategoryEntity>
{
    constructor(
        @InjectRepository(CategoryEntity)
        private readonly categoryRepository: Repository<CategoryEntity>,
    )
    {
        super(categoryRepository.target, categoryRepository.manager, categoryRepository.queryRunner);
    }

    async findOneBySlug(slug: string)
    {
        return await this.findOne({ where: { slug: slug } });
    }

    async findOneById(id: string)
    {
        return await this.findOne({ where: { id: id }, relations:[ 'parent' ] });
    }
}