import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { S3Service } from './s3.service';

@Global()
@Module(
    {
        imports:[  ],
        providers : [ S3Service ],
        exports : [ S3Service ],
    },
)
export class UploadModule {}