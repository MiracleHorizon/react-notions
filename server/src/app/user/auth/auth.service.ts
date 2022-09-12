import { HttpException, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { genSaltSync, hashSync, compare } from 'bcryptjs'
import { v4 } from 'uuid'

import { MailService } from 'app/user/mail/mail.service'
import { TokenService } from 'app/user/token/token.service'
import { User, UserDocument } from './schemas/user.schema'
import { UserDto } from './dto/user.dto'

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private tokenService: TokenService,
    private mailService: MailService
  ) {}

  async register(email: string, password: string) {
    const candidate = await this.userModel.findOne({ email })

    if (candidate) {
      throw new HttpException('User with this email already exists', 403)
    }

    const salt = genSaltSync(10)
    const passwordHash = hashSync(password, salt)
    const activationLink = `${process.env.API_URL}/auth/activate/${v4()}`

    const user = await this.userModel.create({
      email,
      fullName: email.split('@')[0],
      password: passwordHash,
      activationLink,
    })

    await this.mailService.sendActivationMailLink(email, activationLink)

    const userDto = new UserDto(user)
    const tokens = this.tokenService.generateTokens({ ...userDto })
    await this.tokenService.saveToken(userDto._id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email })

    if (!user) {
      throw new HttpException('User with this email not found', 404)
    }

    const isPassEquals = await compare(password, user.password)

    if (!isPassEquals) {
      throw new HttpException('Incorrect password', 403)
    }

    const userDto = new UserDto(user)
    const tokens = this.tokenService.generateTokens({ ...userDto })
    await this.tokenService.saveToken(userDto._id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }

  async logout(refreshToken: string) {
    return this.tokenService.removeToken(refreshToken)
  }

  async activate(activationLink: string) {
    const user = await this.userModel.findOne({
      activationLink: `${process.env.API_URL}/auth/activate/${activationLink}`,
    })

    if (!user) {
      throw new Error('Некорректная ссылка активации')
    }

    user.isActivated = true
    await user.save()
  }

  async refresh(refreshToken: string | null) {
    if (!refreshToken) {
      throw new Error('Unauthorized')
    }

    const userData = await this.tokenService.validateRefreshToken(refreshToken)
    const tokenFromDb = await this.tokenService.findToken(refreshToken)

    if (typeof userData === 'string' || !tokenFromDb) {
      throw new Error('Unauthorized')
    }

    const user = await this.userModel.findById(userData._id)
    const userDto = new UserDto(user)
    const tokens = this.tokenService.generateTokens({ ...userDto })
    await this.tokenService.saveToken(userDto._id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }
}
