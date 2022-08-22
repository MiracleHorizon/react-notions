import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Redirect,
  Req,
  Res,
} from '@nestjs/common'
import { UserService } from './user.service'
import { CreateUserDto } from './dto/create-user.dto'
import { LoginUserDto } from './dto/login-user.dto'
import { Request, Response } from 'express'

@Controller('auth')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('reg')
  async register(@Res() res: Response, @Body() registerDto: CreateUserDto) {
    const { email, password } = registerDto
    const userData = await this.userService.register(email, password)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })

    return res.json({ ...userData }).status(200)
  }

  @Post('login')
  async login(@Res() res: Response, @Body() loginDto: LoginUserDto) {
    const { email, password } = loginDto
    const userData = await this.userService.login(email, password)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })

    return res.json({ ...userData }).status(200)
  }

  @Post('logout')
  async logout(@Req() req: Request, @Res() res: Response) {
    const { refreshToken } = req.cookies
    const token = await this.userService.logout(refreshToken)
    res.clearCookie('refreshToken')

    return res.json({ token }).status(200)
  }

  @Get('activate/:link')
  @Redirect('http://localhost:3000') //!
  activate(@Param('link') link: string) {
    return this.userService.activate(link)
  }

  @Get('refresh')
  async refresh(@Req() req: Request, @Res() res: Response) {
    const { refreshToken } = req.cookies
    const userData = await this.userService.refresh(refreshToken)

    res.cookie('refreshToken', userData.refreshToken, {
      maxAge: 30 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    })

    return res.json({ ...userData }).status(200)
  }

  @Get('/all')
  getAll() {
    return this.userService.getAll()
  }
}
