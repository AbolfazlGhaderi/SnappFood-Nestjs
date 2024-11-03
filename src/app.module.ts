import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseConfigs } from './configs/database.config';
import { CategoryModule } from './modules/category/category.module';
import { UploadModule } from './modules/upload/upload.module';
import { MailModule } from './modules/mail/mail.module';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env', isGlobal:true }),
        TypeOrmModule.forRoot(DatabaseConfigs()),
        CacheModule.register({ ttl: 120_000, isGlobal: true }),
        UploadModule,
        CategoryModule,
        MailModule,
    ],
})
export class AppModule {}
