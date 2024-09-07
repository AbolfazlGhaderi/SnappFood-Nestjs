/* eslint-disable @typescript-eslint/require-await */
import { CategoryService } from './category.service';
import { ApiConsumes, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDTO } from './dto/create-category.dto';
import { SwaggerConsumes } from '@/common/enums/awagger.consumes.enum';
import { UploadeFileS3Interceptor } from '@/app/interceptors/uploadFile.interceptor';
import { Body, Controller, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe, Post, UploadedFile, UseInterceptors } from '@nestjs/common';

@ApiTags('Category')
@Controller('category')
export class CategoryController
{
    constructor(private readonly categoryService: CategoryService)
    {}

    @Post()
    @ApiConsumes(SwaggerConsumes.MultipartData)
    @UseInterceptors(UploadeFileS3Interceptor('image'))
    async CreateCategory(
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
        @Body() createCategoryData:CreateCategoryDTO,
    )
    {
        console.log(1, file);
        console.log(2, createCategoryData);

    }
}