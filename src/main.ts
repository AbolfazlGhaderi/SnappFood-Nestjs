/* eslint-disable import/no-unresolved */
import { AppModule } from '@/app.module';
import { NestFactory } from '@nestjs/core';
import { SwaggerConfig } from './configs/swagger.config';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CheckEnvironmentVariables } from '@/app/utils/checkEnvironment';
import { HttpExceptionFilter } from '@/app/exceptionFilters/http.exceptionFilter';
import { ResponseControllerInterceptor } from './app/interceptors/response.controller.interceptor';

async function bootstrap()
{
    // Check Environments
    CheckEnvironmentVariables('DB_HOST', 'DB_NAME', 'DB_PASSWORD', 'DB_USERNAME', 'DB_PORT', 'S3_ACCESS_KEY', 'S3_BUCKET', 'S3_SECRET_KEY', 'S3_ENDPOINT');

    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // initialize app
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalInterceptors(new ResponseControllerInterceptor());

    // Swagger
    SwaggerConfig(app);

    // listen
    const { PORT } = process.env;
    await app.listen(PORT || 3000);

    // logs
    console.log(`app :  http://localhost:${PORT}`);
    console.log(`Swagger :  http://localhost:${PORT}/api`);
}
void bootstrap();
