import { generateExampleForSwagger } from '@/app/utils/swaggerMethods.util';
import { applyDecorators, HttpStatus } from '@nestjs/common';
import { ApiBody, ApiConsumes, ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

export function Create_CategorySwaggerDecorator()
{
    return applyDecorators(
        ApiOperation({ summary: 'Create a new category' }),
        ApiConsumes('multipart/form-data'),
        ApiBody({
            description: 'Category creation payload with image upload',
            schema: {
                type: 'object',
                properties: {
                    title: { type: 'string' },
                    slug: { type: 'string', nullable: true },
                    image: {
                        type: 'string',
                        format: 'binary',
                        description: 'Category image (PNG/JPG only, max size: 1 MB)',
                    },
                    show: { type: 'boolean' },
                    parent_id: { type: 'string' },
                },
                required: [ 'title', 'image', 'show' ],
            },
        }),
        // 200
        ApiResponse({
            status: HttpStatus.CREATED,
            description: 'Created a new category',
            content: {
                'application/json': {
                    examples: {
                        Created: {
                            value: generateExampleForSwagger(HttpStatus.CREATED, {
                                image: 'https://snappfood-ghaderi.storage.c2.liara.space/photo_2024-08-21_15-54-02_81898308a35d_1729918458252.jpg',
                                show: true,
                                slug: 'dvsdfsdf',
                                title: 'string',
                                parent: {
                                    id: 'f683f637-ec63-463b-a7b9-f1e00b8da9ca',
                                },
                                meta: {
                                    $metadata: {
                                        httpStatusCode: 200,
                                        requestId: '1801E7AC15BAF28F',
                                        extendedRequestId: '6c740fc60f90396e932922158654ae759aae569e2553c68f0cb10ceff8ef7650',
                                        attempts: 1,
                                        totalRetryDelay: 0,
                                    },
                                    ETag: '\'2e0c1260d4bb7545103a4e1b53431a0b\'',
                                    location: 'https://snappfood-ghaderi.storage.c2.liara.space/photo_2024-08-21_15-54-02_81898308a35d_1729918458252.jpg',
                                },
                                id: '5fc16234-d73e-4ca5-9049-f9ec4433e6fc',
                                created_at: '2024-10-26T04:54:18.584Z',
                                update_at: '2024-10-26T04:54:18.584Z',
                                delete_at: null,
                            }),
                        },
                    },
                },
            },
        }),
        // 400
        ApiResponse({
            status: HttpStatus.BAD_REQUEST,
            description: 'Error in the validation of the Body or Bad request',
            content: {
                'application/json': {
                    examples: {
                        BadRequest: {
                            value: generateExampleForSwagger(HttpStatus.BAD_REQUEST, {
                            }),
                        },
                    },
                },
            },
        }),
    );
}


export function Get_CategorySwaggerDecorator()
{
    return applyDecorators(
        ApiOperation({ summary: 'Get all categories with pagination' }),
        ApiQuery({ name: 'page', required: false, type: Number, example: 1, description: 'Page number' }),
        ApiQuery({ name: 'limit', required: false, type: Number, example: 10, description: 'Items per page' }),
        ApiResponse({
            status: HttpStatus.OK,
            description: 'Successful pagination response',
            content: {
                'application/json': {
                    examples: {
                        GetAllWithPagination: {
                            value: generateExampleForSwagger( HttpStatus.OK, {
                                pagination: {
                                    totalCount: 12,
                                    page: 0,
                                    countPerPage: 10,
                                    pageCount: 2,
                                },
                                categories: [
                                    {
                                        image: 'https://snappfood-ghaderi.storage.c2.liara.space/photo_2024-08-21_15-54-02_81898308a35d_1729918458252.jpg',
                                        show: true,
                                        slug: 'dvsdfsdf',
                                        title: 'string',
                                        parent: {
                                            id: 'f683f637-ec63-463b-a7b9-f1e00b8da9ca',
                                        },
                                        meta: {
                                            $metadata: {
                                                httpStatusCode: 200,
                                                requestId: '1801E7AC15BAF28F',
                                                extendedRequestId: '6c740fc60f90396e932922158654ae759aae569e2553c68f0cb10ceff8ef7650',
                                                attempts: 1,
                                                totalRetryDelay: 0,
                                            },
                                            ETag: '\'2e0c1260d4bb7545103a4e1b53431a0b\'',
                                            location: 'https://snappfood-ghaderi.storage.c2.liara.space/photo_2024-08-21_15-54-02_81898308a35d_1729918458252.jpg',
                                        },
                                        id: '5fc16234-d73e-4ca5-9049-f9ec4433e6fc',
                                        created_at: '2024-10-26T04:54:18.584Z',
                                        update_at: '2024-10-26T04:54:18.584Z',
                                        delete_at: null,
                                    },
                                ],
                            }),
                        },
                    },
                },
            },
        }),
    );
}

export function Update_CategorySwaggerDecorator()
{
    return applyDecorators(
        ApiOperation({ summary: 'Update an existing category' }),
        ApiConsumes('multipart/form-data'),
        ApiBody({
            description: 'Category update payload with image upload',
            schema: {
                type: 'object',
                properties: {
                    id: { type: 'string' },
                    title: { type: 'string' },
                    slug: { type: 'string' },
                    image: {
                        type: 'string',
                        format: 'binary',
                        description: 'Category image (PNG/JPG only, max size: 1 MB)',
                    },
                    show: { type: 'boolean' },
                    parent_id: { type: 'string' },
                },
                required: [ 'id' ],
            },
        }),
        // 200
        ApiResponse({
            status: HttpStatus.OK,
            description: 'Category updated successfully',
            content: {
                'application/json': {
                    examples: {
                        Updated: {
                            value: generateExampleForSwagger(HttpStatus.CREATED, {
                                message: 'با موفقیت آپدیت شد',
                                id: '60269ddc-2c35-469f-a482-b9b4148881e8',
                            }),
                        },
                    },
                },
            },
        }),
        // 400
        ApiResponse({
            status: HttpStatus.BAD_REQUEST,
            description: 'Error in the validation of the Body or Bad request',
            content: {
                'application/json': {
                    examples: {
                        BadRequest: {
                            value: generateExampleForSwagger(HttpStatus.BAD_REQUEST, {
                                message: [
                                    'id must be a UUID',
                                ],
                            }),
                        },
                    },
                },
            },
        }),
    );
}