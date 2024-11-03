/* eslint-disable import/no-unresolved */
import { AppModule } from '@/app.module'
import { NestFactory } from '@nestjs/core'
import { SwaggerConfig } from './configs/swagger.config'
import { NestExpressApplication } from '@nestjs/platform-express'
import { CheckEnvironmentVariables } from '@/app/utils/checkEnvironment'
import { HttpExceptionFilter } from '@/app/exceptionFilters/http.exceptionFilter'
import { ResponseControllerInterceptor } from './app/interceptors/response.controller.interceptor'
import { ValidationPipe } from '@nestjs/common'

async function bootstrap()
{
    // Check Environments
    CheckEnvironmentVariables()

    const app = await NestFactory.create<NestExpressApplication>(AppModule)

    // initialize app
    app.useGlobalFilters(new HttpExceptionFilter())
    app.useGlobalInterceptors(new ResponseControllerInterceptor())
    app.useGlobalPipes( new ValidationPipe())
    // Swagger
    SwaggerConfig(app)

    // listen
    const { PORT } = process.env
    await app.listen(PORT || 3000)

    // logs
    console.log(`app :  http://localhost:${PORT}`)
    console.log(`Swagger :  http://localhost:${PORT}/api`)
}
void bootstrap()
