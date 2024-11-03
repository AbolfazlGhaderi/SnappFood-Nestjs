/* eslint-disable @typescript-eslint/require-await */
import { CategoryService } from './category.service'
import { ApiConsumes, ApiTags } from '@nestjs/swagger'
import { PaginationDTO } from '@/common/dtoes/pagination.dto'
import { CreateCategoryDTO } from './dto/create-category.dto'
import { UpdateCategoryDto } from './dto/update-category.dto'
import { pagination } from '@/common/decorators/pagination.decorator'
import { SwaggerConsumes } from '@/common/enums/awagger.consumes.enum'
import { UploadeFileS3Interceptor } from '@/app/interceptors/uploadFile.interceptor'
import { Body, Controller, Delete, FileTypeValidator, Get, MaxFileSizeValidator, Param, ParseFilePipe, ParseUUIDPipe, Patch, Post, Query, UploadedFile, UseInterceptors } from '@nestjs/common'
import { Create_CategorySwaggerDecorator, Delete_CategorySwaggerDecorator, Get_CategorySwaggerDecorator, Update_CategorySwaggerDecorator } from './category.swagger'

@ApiTags('Category')
@Controller('category')
export class CategoryController
{
    constructor(private readonly categoryService: CategoryService)
    {}

    @Post()
    @Create_CategorySwaggerDecorator()
    @ApiConsumes(SwaggerConsumes.MultipartData)
    @UseInterceptors(UploadeFileS3Interceptor('image'))
    async createCategory_Handler(
        @UploadedFile( new ParseFilePipe({
            validators:[
                new MaxFileSizeValidator({
                    maxSize: 1024 * 1024, // 1 MB
                }),
                new FileTypeValidator({
                    fileType:'image/(png|jpeg|jpg)',
                }),
            ],
        })) file: Express.Multer.File,
        @Body() createCategoryData: CreateCategoryDTO,
    )
    {
        return await this.categoryService.createCategory(createCategoryData, file)
    }

    @Get('/')
    @pagination()
    @Get_CategorySwaggerDecorator()
    async getAllCategories_Handler(@Query() paginationData: PaginationDTO)
    {
        return await this.categoryService.getAllCategories(paginationData)
    }

    @Patch('')
    @Update_CategorySwaggerDecorator()
    @ApiConsumes(SwaggerConsumes.MultipartData)
    @UseInterceptors(UploadeFileS3Interceptor('image'))
    async updateCategory_Handler(
        @UploadedFile( new ParseFilePipe({
            validators:[
                new MaxFileSizeValidator({
                    maxSize: 1024 * 1024, // 1 MB
                }),
                new FileTypeValidator({
                    fileType:'image/(png|jpeg|jpg)',
                }),
            ],
            fileIsRequired: false,
        })) file: Express.Multer.File,
        @Body() updateData: UpdateCategoryDto,
    )
    {
        return await this.categoryService.updateCategory(updateData, file)
    }

    @Delete('/:id')
    @Delete_CategorySwaggerDecorator()
    async deleteCategory_Handler(@Param('id', ParseUUIDPipe) id: string)
    {
        return await this.categoryService.deleteCategory(id)
    }

    @Get('/email')
    async email_Handler()
    {
        await this.categoryService.sendEmail()
    }

}