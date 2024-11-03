import { Module } from '@nestjs/common';
import { CacheManagerService } from './cache-manager.service';
import { CacheModule } from '@nestjs/cache-manager';
// import { SmsService } from '../../common/services/sms.service';

@Module({
    imports: [  ],
    providers: [ CacheManagerService ],
    exports:[ CacheManagerService ],
})
export class CacheManagerModule {}
