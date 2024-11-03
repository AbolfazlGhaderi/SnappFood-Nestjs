import { FileInterceptor } from '@nestjs/platform-express'
import { memoryStorage } from 'multer'

export function UploadeFileS3Interceptor(fileName: string)
{
    return class UploadeUtility extends FileInterceptor(fileName, {
        storage:memoryStorage(),
    }) {}
}
