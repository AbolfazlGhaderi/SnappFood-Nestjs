import { S3 } from 'aws-sdk';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ServiceUnavailableMessage } from '@/common/enums/message.enum';

@Injectable()
export class S3Service
{
    private readonly s3: S3;
    constructor()
    {
        this.s3 = new S3(
            {
                region:'default',
                endpoint:process.env.S3_ENDPOINT,
                credentials:{
                    accessKeyId:process.env.S3_ACCESS_KEY,
                    secretAccessKey:process.env.S3_SECRET_KEY,

                },
            },
        );
    }

    async UploadFile(file: Express.Multer.File)
    {
        const Param = {
            Body: file.buffer,
            Bucket: process.env.LIARA_BUCKET_OBJS_NAME,
            Key: file.originalname,
        };

        try
        {
            return await this.s3.upload({
                Body: file.buffer,
                Bucket: process.env.S3_BUCKET,
                Key: file.originalname,
            }).promise();
        }
        catch (error)
        {
            console.log(error);
            throw new HttpException(ServiceUnavailableMessage.UploadeServiceUnavailable, HttpStatus.SERVICE_UNAVAILABLE);
        }
    }

    async DeleteFile(key:string)
    {
        try
        {
            return await this.s3.deleteObject({
                Bucket:process.env.S3_BUCKET,
                Key: decodeURI(key),
            }).promise();
        }
        catch (error)
        {
            console.log(error);
            throw new HttpException(ServiceUnavailableMessage.UploadeServiceUnavailable, HttpStatus.SERVICE_UNAVAILABLE);
        }
    }
}

