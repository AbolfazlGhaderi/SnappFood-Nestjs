import { S3Client, PutObjectCommand, ListObjectsV2Command, DeleteObjectCommand, PutObjectCommandOutput } from '@aws-sdk/client-s3'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'
import { ServiceUnavailableMessage } from '@/common/enums/message.enum'
import { generateName } from '@/common/enums/functions.utils'

@Injectable()
export class S3Service
{
    private readonly s3: S3Client
    constructor()
    {

        this.s3 = new S3Client(
            {
                region: 'default',
                endpoint: process.env.S3_ENDPOINT,
                credentials: {
                    accessKeyId: process.env.S3_ACCESS_KEY,
                    secretAccessKey: process.env.S3_SECRET_KEY,
                },
            },
        )
    }

    async uploadFile(file: Express.Multer.File) : Promise<PutObjectCommandOutput & { location: string }>
    {
        try
        {
            const key = generateName(file.originalname)
            const uploadedFile = await this.s3.send(new PutObjectCommand(
                {
                    Body: file.buffer,
                    Bucket: process.env.S3_BUCKET,
                    Key: key,
                },
            ))
            const location = `https://${process.env.S3_BUCKET}.${(process.env.S3_ENDPOINT).slice(8)}/${key}`

            // Reflect.set(uploadedFile, 'location', location);
            return { ...uploadedFile, location }
        }
        catch (error)
        {
            console.log(error)
            throw new HttpException(ServiceUnavailableMessage.UploadeServiceUnavailable, HttpStatus.SERVICE_UNAVAILABLE)
        }
    }

    async deleteFile(key:string)
    {
        try
        {
            // return await this.s3.deleteObject({
            //     Bucket:process.env.S3_BUCKET,
            //     Key: decodeURI(key),
            // }).promise();

            const data = await this.s3.send(new DeleteObjectCommand({
                Bucket: process.env.S3_BUCKET,
                Key: decodeURI(key),
            }))

            console.log(data)
            return data
        }
        catch (error)
        {
            console.log(error)
            throw new HttpException(ServiceUnavailableMessage.UploadeServiceUnavailable, HttpStatus.SERVICE_UNAVAILABLE)
        }
    }

    async showFiles()
    {
        const parameters = {
            Bucket: process.env.LIARA_BUCKET_OBJS_NAME,
        }

        const data = await this.s3.send(new ListObjectsV2Command(parameters))
        console.log(data)
        const files = data.Contents?.map((file) => file.Key)

        return files
    }
}

