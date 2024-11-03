import { ServiceUnavailableMessage } from '@/common/enums/message.enum'
import { MailerService } from '@nestjs-modules/mailer'
import { HttpException, HttpStatus, Injectable } from '@nestjs/common'

@Injectable()
export class MailService
{
    constructor(private mailerService: MailerService)
    {}

    // TODO: from => import from env
    async SendEmail(from:string, to:string, subject:string, text:string, html:string)
    {
        if (from === '') from = process.env.MAIL_FROM

        try
        {
            await this.mailerService.sendMail(
                {
                    from,
                    to,
                    subject,
                    text,
                    html,
                },
            )
        }
        catch (error)
        {
            console.log(error)
            throw new HttpException(ServiceUnavailableMessage.MailServiceUnavailable, HttpStatus.SERVICE_UNAVAILABLE)
        }
    }
}