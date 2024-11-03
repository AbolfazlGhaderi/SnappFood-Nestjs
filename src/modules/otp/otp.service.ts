import { randomInt } from 'crypto'
import { MailService } from '../mail/mail.service'
import { Injectable } from '@nestjs/common'
import { CacheManagerService } from '../cache-manager/cache-manager.service'

@Injectable()
export class OtpService
{
    constructor(
        private readonly cacheManagerService: CacheManagerService,
        private readonly mailService: MailService,
    ) {}

    // generate code
    generateOtp()
    {
        return randomInt(10_000, 99_999)
    }


    // async SaveLoginOTP(key: string, code: number)
    // {
    //     // Generate Code

    //     key = `${key}${OtpKey.Login}`;

    //     console.log(key + '  ' + code);
    //     // check If Otp Is Exist In Cache
    //     const otp = await this.cacheManager.get(key);
    //     if (otp)
    //     {
    //         await this.cacheManager.del(key);
    //     }

    //     // Save Code To Cache
    //     await this.cacheManager.set(key, code);

    //     return code;
    // }

    // async GetOtp(key: string, type?: TokenType)
    // {
    //     const code: number | undefined = await this.cacheManager.get(key);
    //     if (code)
    //     {
    //         return code.toString();
    //     }
    //     else
    //     {
    //         if (type && type === TokenType.Login) throw new UnauthorizedException(AuthMessage.ExpiredOtp);
    //         else
    //         {
    //             throw new HttpException(AuthMessage.ExpiredOtp, HttpStatus.FORBIDDEN);
    //         }
    //     }
    // }


    // async sendAndSaveOTP(content: string, otpkey:OtpKey, type: 'email'|'phone')
    // {
    //     const key = `${content}${otpkey}`;
    //     const code = this.generateOtp();
    //     // check If Otp Is Exist In Cache
    //     const otp = await this.cacheManager.get(key);
    //     if (otp)
    //     {
    //         throw new HttpException(BadRequestMesage.SaveOtp, HttpStatus.BAD_REQUEST);
    //     }

    //     // send code to Email or Phone

    //     if (type === 'email')
    //     {
    //         await this.mailService.SendEmail('', content, GenerateOtpSubject(otpkey), `Code : ${code} `, `<h1>Code : ${code} </h1>`);
    //     }
    //     if (type === 'phone')
    //     {
    //         await this.smsService.sendOtpCode(content, code.toString());
    //     }
    //     else
    //     {}

    //     // Save Code To Cache
    //     await this.cacheManager.set(key, code);
    //     console.log(key + ' ==>  ' + code);  // TODO: Remove It

    //     return code;
    // }
}
