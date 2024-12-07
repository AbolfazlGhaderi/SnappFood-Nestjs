import { Repository } from 'typeorm'
import { Injectable } from '@nestjs/common'
import { CategoryEntity } from '@/entities/category.entity'

@Injectable()
export class CategoryRepository extends Repository<CategoryEntity>
{

    async findOneBySlug(slug: string)
    {
        return await this.findOne({ where: { slug: slug } })
    }

    async findOneById(id: string)
    {
        return await this.findOne({ where: { id: id }, relations:[ 'parent' ] })
    }
}