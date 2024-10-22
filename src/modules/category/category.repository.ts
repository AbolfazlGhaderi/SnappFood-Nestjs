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
        console.log('categoryRepository.target ===>', categoryRepository.target);
        console.log('categoryRepository.manager ===>', categoryRepository.manager);
        console.log('categoryRepository.queryRunner ===>', categoryRepository.queryRunner);
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