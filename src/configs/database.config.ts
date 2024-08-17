import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { MikroOrmModuleSyncOptions } from '@mikro-orm/nestjs';

export function DatabaseConfig(): MikroOrmModuleSyncOptions
{
    return {
        port: +process.env.DB_PORT || 5432,
        user: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        dbName: process.env.DB_NAME,
        driver:PostgreSqlDriver,
        entitiesTs:[ './src/entities/*.entity.ts' ],
        entities:[ './dist/entities/*.entity.js' ],
    };
}
