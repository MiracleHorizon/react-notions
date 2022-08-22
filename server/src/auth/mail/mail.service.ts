import { Injectable } from '@nestjs/common'
import { createTransport } from 'nodemailer'

@Injectable()
export class MailService {
  transporter

  constructor() {
    this.transporter = createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_MAIL,
        pass: process.env.SMTP_MAIL_PASS,
      },
    })
  }

  async sendActivationMail(to, link) {
    await this.transporter.sendMail({
      from: 'reactnotions.mailer@gmail.com',
      to,
      subject: `Активация аккаунта ${process.env.API_URL}`,
      text: '',
      html: `
          <div>
            <h1>Для активации аккаунта перейдите по ссылке:</h1>
            <a href='${link}'>${link}</a>
          <div/>
        `,
    })
  }
}
