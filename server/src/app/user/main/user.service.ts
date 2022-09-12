import { HttpException, Injectable } from '@nestjs/common'
import { Model, ObjectId } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
import { compare, hash } from 'bcryptjs'
import { v4 } from 'uuid'

import { PageService } from 'app/page/page.service'
import { MailService } from 'app/user/mail/mail.service'
import { FilesService, FileType } from 'app/files/files.service'
import { User, UserDocument } from 'app/user/auth/schemas/user.schema'
import { UpdateUserDto } from 'app/user/auth/dto/update-user.dto'
import { ChangePasswordDto } from 'app/user/auth/dto/change-password.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private filesService: FilesService,
    private pageService: PageService,
    private mailService: MailService
  ) {}

  async update(id: ObjectId, dto: UpdateUserDto) {
    await this.userModel.findByIdAndUpdate(id, { ...dto })

    return dto
  }

  async delete(id: ObjectId): Promise<User> {
    await this.pageService.deleteAll(id)
    return this.userModel.findByIdAndDelete(id)
  }

  async changePassword(id: ObjectId, dto: ChangePasswordDto) {
    const { oldPass, newPass } = dto
    const user = await this.userModel.findById(id)

    if (!user) {
      throw new HttpException('User with this email not found', 404)
    }

    const isPassEquals = await compare(oldPass, user.password)

    if (!isPassEquals) {
      throw new HttpException('Incorrect password', 403)
    }

    user.password = await hash(newPass, 3)
    await user.save()

    return {
      message: 'Password changed successfully',
    }
  }

  async resetPassword(code: string, password: string) {
    const user = await this.userModel.findOne({ resetPasswordCode: code })

    if (!user) {
      throw new HttpException('User with this email not found.', 404)
    }

    user.password = await hash(password, 3)
    await user.save()

    return {
      email: user.email,
      message: 'Password changed successfully',
    }
  }

  async uploadAvatar(id: ObjectId, avatarUrlFile: string) {
    const avatarFilePath = this.filesService.createFile(
      FileType.IMAGE,
      avatarUrlFile
    )

    await this.userModel.findByIdAndUpdate(id, { avatarUrl: avatarFilePath })

    return { avatarUrl: avatarFilePath }
  }

  async checkPassword(id: ObjectId, password: string) {
    const user = await this.userModel.findById(id)

    const isPassEquals = await compare(password, user.password)

    if (!isPassEquals) {
      throw new HttpException('Incorrect password', 403)
    }

    return {
      message: 'Success',
    }
  }

  async sendChangeEmailVerifyCode(id: ObjectId, email: string) {
    const user = await this.userModel.findById(id)
    const code = v4()

    user.changeEmailCode = code
    await user.save()

    return this.mailService.sendChangeEmailVerifyCode(email, code)
  }

  async sendResetPasswordVerifyCode(email: string) {
    const user = await this.userModel.findOne({ email })

    if (!user) {
      throw new HttpException('User with this email not found.', 404)
    }

    const code = v4()
    user.resetPasswordCode = code
    await user.save()

    return this.mailService.sendResetPasswordVerifyCode(email, code)
  }

  async verifyChangeEmailCode(id: ObjectId, code: string) {
    const user = await this.userModel.findById(id)

    if (user.changeEmailCode === '') {
      throw new HttpException("You didn't send email change requests", 400)
    }

    if (user.changeEmailCode === code) {
      return {
        message: 'Success',
      }
    } else {
      throw new HttpException(
        'Your login code was incorrect. Please try again.',
        403
      )
    }
  }

  async verifyResetPasswordCode(resetPasswordCode: string) {
    const user = await this.userModel.findOne({ resetPasswordCode })

    if (user.resetPasswordCode === '') {
      throw new HttpException("You didn't send reset password requests", 400)
    }

    if (user.resetPasswordCode === resetPasswordCode) {
      return {
        message: 'Success',
      }
    } else {
      throw new HttpException(
        'Your login code was incorrect. Please try again.',
        403
      )
    }
  }
}
