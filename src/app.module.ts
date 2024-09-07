import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigs } from './configs/database.config';
import { CategoryModule } from './modules/category/category.module';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env', isGlobal:true }),
        TypeOrmModule.forRoot(DatabaseConfigs()),
        CategoryModule,
    ],
})
export class AppModule {}
