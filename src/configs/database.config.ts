import { TypeOrmModuleOptions } from '@nestjs/typeorm'

export function DatabaseConfigs(): TypeOrmModuleOptions
{
    return {
        port: +process.env.DB_PORT || 5432,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST || 'localhost',
        type: 'postgres',
        entities: [ './dist/entities/*.entity.js' ],
        synchronize: true,
        logging: true,
    }
}
