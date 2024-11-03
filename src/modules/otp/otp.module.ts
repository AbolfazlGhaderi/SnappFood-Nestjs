import { Module } from '@nestjs/common'
import { OtpService } from './otp.service'
import { MailService } from '../mail/mail.service'
import { CacheManagerModule } from '../cache-manager/cache-manager.module'
import { CacheManagerService } from '../cache-manager/cache-manager.service'
// import { SmsService } from '../../common/services/sms.service';

@Module({
    providers: [ OtpService, MailService, CacheManagerService ],
    exports:[ OtpService ],
})
export class OtpModule {}
