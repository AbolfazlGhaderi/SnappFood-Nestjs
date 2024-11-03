import { Cache } from 'cache-manager'
import { CACHE_MANAGER } from '@nestjs/cache-manager'
import { Inject, Injectable } from '@nestjs/common'

@Injectable()
export class CacheManagerService
{
    constructor(
        @Inject(CACHE_MANAGER) private cacheManager: Cache,

    ) {}
    async get(key: string): Promise<unknown>
    {
        return await this.cacheManager.get(key)
    }

    // @Cron('*/5 * * * *') // every 5 minutes
    private async set(key: string, value: unknown): Promise<void>
    {
        return await this.cacheManager.set(key, value)
    }


    private async delete(key: string): Promise<void>
    {
        await this.cacheManager.del(key)
    }
}
