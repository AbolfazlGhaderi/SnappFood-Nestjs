import { S3Service } from '../uplode/s3.service';
import { CategoryRepository } from './category.repository';
import { CategoryEntity } from '@/entities/category.entity';
import { CheckBoolean, createSlug } from '@/common/enums/functions.utils';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { ConflictMessages } from '@/common/enums/message.enum';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService
{
    constructor(
        private readonly categoryRepository: CategoryRepository,
        private readonly s3:S3Service,
    ) {}

    async CreateCategory(data: CreateCategoryDTO, image:Express.Multer.File)
    {
        const categoryAndSlug = await this.checkSlugAndTitle({ slug: data.slug, title: data.title });
        if (categoryAndSlug.category)
            throw new HttpException(ConflictMessages.CategoryConflict, HttpStatus.CONFLICT);
        const uploaded = await this.s3.UploadFile(image);

        return await this.categoryRepository.save(
            {
                image:uploaded.Location,
                show:CheckBoolean(data.show),
                slug:categoryAndSlug.slug,
                title:data.title,
            },
        );
    }

    async checkSlugAndTitle(data: { slug?: string; title: string })
    {
        let { title, slug } = data;
        let category: CategoryEntity | null = null;
        if (slug)
        {
            slug = createSlug(slug);
            category = await this.categoryRepository.findOneBySlug(slug);
        }
        else
        {
            title = createSlug(title);
            category = await this.categoryRepository.findOneBySlug(title);
        }
        return {
            category:category,
            slug:slug || title,
        };


    }
}
