import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigs } from './configs/database.config';
import { CategoryModule } from './modules/category/category.module';
import { UploadModule } from './modules/upload/upload.module';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env', isGlobal:true }),
        TypeOrmModule.forRoot(DatabaseConfigs()),
        UploadModule,
        CategoryModule,
    ],
})
export class AppModule {}
