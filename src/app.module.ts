import { Module } from '@nestjs/common';
import { DatabaseConfigs } from './configs/database.config';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [
        ConfigModule.forRoot({ envFilePath: '.env', isGlobal:true }),
        TypeOrmModule.forRoot(DatabaseConfigs()),
    ],
})
export class AppModule {}
