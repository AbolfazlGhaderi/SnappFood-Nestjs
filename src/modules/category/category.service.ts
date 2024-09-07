import { S3Service } from '../uplode/s3.service';
import { CategoryRepository } from './category.repository';
import { CategoryEntity } from '@/entities/category.entity';
import { PaginationDTO } from '@/common/dto/pagination.dto';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { PaginationGenerator, PaginationSolver } from '@/app/utils/pagination.utils';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CheckBoolean, createSlug } from '@/common/enums/functions.utils';
import { ConflictMessages, NotFoundMessages, PublicMessage } from '@/common/enums/message.enum';

@Injectable()
export class CategoryService
{
    constructor(
        private readonly categoryRepository: CategoryRepository,
        private readonly s3: S3Service,
    ) {}

    async CreateCategory(data: CreateCategoryDTO, image: Express.Multer.File)
    {
        try
        {
            const categoryAndSlug = await this.checkSlugAndTitle({ slug: data.slug, title: data.title });
            if (categoryAndSlug.category) throw new HttpException(ConflictMessages.CategoryConflict, HttpStatus.CONFLICT);

            // Check Parent
            let parent: CategoryEntity | null = null;
            if (data.parent_id)
            {
                parent = await this.categoryRepository.findOneById(data.parent_id.toString());
                if (!parent) throw new HttpException(NotFoundMessages.CategoryNotFound, HttpStatus.NOT_FOUND);
            }

            // Upload Image
            const uploaded = await this.s3.UploadFile(image);

            // Save Category
            return await this.categoryRepository.save({
                image: uploaded.Location,
                show: CheckBoolean(data.show),
                slug: categoryAndSlug.slug,
                title: data.title,
                parent: { id: parent?.id },
            });
        }
        catch (error)
        {
            console.log(error);
            if (error instanceof HttpException)
            {
                throw error;
            }
            else
                throw new HttpException(PublicMessage.Error, HttpStatus.BAD_REQUEST);
        }
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
            category: category,
            slug: slug || title,
        };
    }

    async GetAllCategories(paginationData:PaginationDTO)
    {
        const {  page, limit, skip } = PaginationSolver(+paginationData.page, +paginationData.limit);
        const [ categories, count ] = await this.categoryRepository.findAndCount(
            {
                where:{},
                relations:[ 'parent' ],
                select:{
                    parent:{
                        id:true,
                        title:true,
                        slug:true,
                    },
                },
                take:limit,
                skip,
                order:{
                    id:'DESC',
                },
            },
        );

        return {
            pagination: PaginationGenerator(page, limit, count),
            categories:categories,
        };
    }
}
