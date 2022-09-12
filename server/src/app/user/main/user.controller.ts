import {
  Body,
  Controller,
  Delete,
  Param,
  Post,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { FileFieldsInterceptor } from '@nestjs/platform-express'

import { UserService } from './user.service'
import { UpdateUserDto } from 'app/user/auth/dto/update-user.dto'
import { ChangePasswordDto } from 'app/user/auth/dto/change-password.dto'

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('update/:id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateUserDto) {
    return this.userService.update(id, dto)
  }

  @Post('update/password/:id')
  changePassword(@Param('id') id: ObjectId, @Body() dto: ChangePasswordDto) {
    return this.userService.changePassword(id, dto)
  }

  @Post('files/:id/avatar')
  @UseInterceptors(
    FileFieldsInterceptor([
      {
        name: 'avatarUrl',
        maxCount: 1,
      },
    ])
  )
  uploadAvatar(@UploadedFiles() file, @Param('id') id: ObjectId) {
    return this.userService.uploadAvatar(id, file.avatarUrl[0])
  }

  @Delete('delete/:id')
  delete(@Param('id') id) {
    return this.userService.delete(id)
  }

  @Post('verify/password/code/:id')
  checkPassword(@Param('id') id, @Body() body: { password: string }) {
    return this.userService.checkPassword(id, body.password)
  }

  @Post('reset/password/:code')
  resetPassword(
    @Param('code') code: string,
    @Body() body: { password: string }
  ) {
    return this.userService.resetPassword(code, body.password)
  }

  @Post('verify/email/send/:id')
  sendChangeEmailVerifyCode(@Param('id') id, @Body() body: { email: string }) {
    return this.userService.sendChangeEmailVerifyCode(id, body.email)
  }

  @Post('verify/password/send')
  sendResetPasswordVerifyCode(@Body() body: { email: string }) {
    return this.userService.sendResetPasswordVerifyCode(body.email)
  }

  @Post('verify/email/:id')
  verifyChangeEmailCode(@Param('id') id, @Body() body: { code: string }) {
    return this.userService.verifyChangeEmailCode(id, body.code)
  }

  @Post('verify/password/:code')
  verifyResetPasswordCode(@Param('code') code) {
    return this.userService.verifyResetPasswordCode(code)
  }
}
