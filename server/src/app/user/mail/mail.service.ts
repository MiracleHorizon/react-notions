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

  async sendActivationMailLink(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_MAIL,
      to,
      subject: `Account activation ${process.env.API_URL}`,
      text: '',
      html: `
          <div>
            <h1>To activate your account follow the link:</h1>
            <a href='${link}'>${link}</a>
          <div/>
        `,
    })
  }

  async sendChangeEmailVerifyCode(to, code) {
    await this.transporter.sendMail({
      from: process.env.SMTP_MAIL,
      to,
      subject: `Your change email verification code is: ${code}`,
      text: '',
      html: `
          <div>
            <h1>Change email verification</h1>
            <p>Copy and paste this code to verify this email address:</p>
            <span>${code}</span>
            <p>If you didn't try to change your React Notion account email address, you can safely ignore this email.</p>
          <div/>
        `,
    })
  }

  async sendResetPasswordVerifyCode(to, code) {
    await this.transporter.sendMail({
      from: process.env.SMTP_MAIL,
      to,
      subject: `Your reset password verification code is: ${code}`,
      text: '',
      html: `
          <div>
            <h1>Reset password verification</h1>
            <p>Copy and paste this code to verify this email address:</p>
            <span>${code}</span>
            <p>If you didn't try to change your React Notion account email address, you can safely ignore this email.</p>
          <div/>
        `,
    })
  }
}
