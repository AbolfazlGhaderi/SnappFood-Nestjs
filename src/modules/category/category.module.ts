import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryService } from './category.service';
import { CategoryController } from './category.controller';
import { CategoryEntity } from '@/entities/category.entity';
import { CategoryRepository } from './category.repository';

@Module(
    {
        imports:[ TypeOrmModule.forFeature([ CategoryEntity ]) ],
        controllers : [ CategoryController ],
        providers : [ CategoryService, CategoryRepository ],
    },
)
export class CategoryModule {}