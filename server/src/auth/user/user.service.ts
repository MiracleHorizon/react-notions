import { Injectable } from '@nestjs/common'
import { User, UserDocument } from './schemas/user.schema'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { compare, hash } from 'bcrypt'
import { v4 } from 'uuid'
import { MailService } from '../mail/mail.service'
import { TokenService } from '../token/token.service'
import { UserDto } from './dto/user.dto'
import { FilesService, FileType } from '../../files/files.service'
import { UpdateUserDto } from './dto/update-user.dto'

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
    private tokenService: TokenService,
    private mailService: MailService,
    private filesService: FilesService
  ) {}

  async register(email: string, password: string) {
    const candidate = await this.userModel.findOne({ email })

    if (candidate) {
      throw new Error(
        `Пользователь с почтовым адресом ${email} уже существует.`
      )
    }

    const passwordHash = await hash(password, 3)
    const activationLink = v4()

    const user = await this.userModel.create({
      email,
      password: passwordHash,
      activationLink,
    })

    // await this.mailService.sendActivationMail(
    //   email,
    //   `${process.env.API_URL}/user/activate/${activationLink}`
    // )

    const userDto = new UserDto(user)
    const tokens = this.tokenService.generateTokens({ ...userDto })
    await this.tokenService.saveToken(userDto._id, tokens.refreshToken)

    return { ...tokens, user: userDto }
  }

  async login(email: string, password: string) {
    const user = await this.userModel.findOne({ email })

    if (!user) {
      throw new Error('Такого пользователя не существует')
    }

    const isPassEquals = await compare(password, user.password)

    if (!isPassEquals) {
      throw new Error('Пароли не совпадают')
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
    const user = await this.userModel.findOne({ activationLink })

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

  async update(id: ObjectId, dto: UpdateUserDto) {
    await this.userModel.findByIdAndUpdate(id, { ...dto })

    return dto
  }

  async uploadAvatar(id: ObjectId, avatarUrlFile: string) {
    const avatarFilePath = this.filesService.createFile(
      FileType.IMAGE,
      avatarUrlFile
    )

    await this.userModel.findByIdAndUpdate(id, { avatarUrl: avatarFilePath })

    return { avatarUrl: avatarFilePath }
  }

  async delete(id: ObjectId): Promise<User> {
    return this.userModel.findByIdAndDelete(id)
  }
}
