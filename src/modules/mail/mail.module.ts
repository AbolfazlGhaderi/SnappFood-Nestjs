import { Global, Module } from '@nestjs/common'
import { MailService } from './mail.service'
import { MailerModule } from '@nestjs-modules/mailer'

@Global()
@Module({
    imports: [ MailerModule.forRootAsync({
        useFactory:() => ({
            transport:{
                host: process.env.MAIL_HOST,
                port: +process.env.MAIL_PORT,
                secure: true,
                auth: {
                    user: process.env.MAIL_USER,
                    pass: process.env.MAIL_PASSWORD,
                },
            },
            defaults: {
                from: process.env.MAIL_FROM,
            },

        }),
    }) ],
    controllers: [],
    providers: [ MailService ],
    exports: [ MailService ],
})
export class MailModule
{}