import { S3 } from 'aws-sdk';
import { Injectable } from '@nestjs/common';

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

    // async UploadFile(file: Express.Multer.File)
    // {
    //     const Param = {
    //         Body: file.buffer,
    //         Bucket: process.env.LIARA_BUCKET_OBJS_NAME,
    //         Key: file.originalname,
    //     };

    //     try
    //     {
    //         return await this.s3.send(new PutObjectCommand(Param));
    //     }
    //     catch (error)
    //     {
    //         console.log(error);
    //         throw new HttpException(PublicMessage.SystemError, HttpStatus.INTERNAL_SERVER_ERROR);
    //     }
}

