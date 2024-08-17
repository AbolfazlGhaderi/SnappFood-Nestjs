import { AppModule } from './app.module';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { CheckEnvironmentVariables } from './app/utils/checkEnvironment';

async function bootstrap()
{

    CheckEnvironmentVariables('PORT', 'DB_PORT', 'DB_USERNAME', 'DB_PASSWORD', 'DB_NAME');
    const app = await NestFactory.create<NestExpressApplication>(AppModule);
    const { PORT } = process.env;
    await app.listen(+PORT || 3000);
}
void bootstrap();
