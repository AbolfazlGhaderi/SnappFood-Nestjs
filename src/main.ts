import { AppModule } from '@/app.module';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CheckEnvironmentVariables } from '@/app/utils/checkEnvironment';

async function bootstrap()
{

    CheckEnvironmentVariables('DB_HOST', 'DB_NAME', 'DB_PASSWORD', 'DB_USERNAME', 'DB_PORT', 'S3_ACCESS_KEY', 'S3_BUCKET', 'S3_SECRET_KEY', 'S3_ENDPOINT');
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    await app.listen(process.env.PORT || 3000);
}
void bootstrap();
