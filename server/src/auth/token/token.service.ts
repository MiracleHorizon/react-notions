import { Injectable } from '@nestjs/common'
import { sign, verify } from 'jsonwebtoken'
import { InjectModel } from '@nestjs/mongoose'
import { Token, TokenDocument } from './schemas/token.schema'
import { Model } from 'mongoose'

@Injectable()
export class TokenService {
  constructor(
    @InjectModel(Token.name) private tokenModel: Model<TokenDocument>
  ) {}

  generateTokens(payload) {
    const accessToken = sign(payload, 'ЗАМЕНИ МЕНЯ', { expiresIn: '10m' }) //!
    const refreshToken = sign(payload, 'ЗАМЕНИ МЕНЯ2', { expiresIn: '30d' }) //!

    return {
      accessToken,
      refreshToken,
    }
  }

  async saveToken(userId, refreshToken) {
    const tokenData = await this.tokenModel.findOne({ user: userId })

    if (tokenData) {
      tokenData.refreshToken = refreshToken
      return tokenData.save()
    }

    return this.tokenModel.create({ user: userId, refreshToken })
  }

  async removeToken(refreshToken: string) {
    return this.tokenModel.deleteOne({ refreshToken })
  }

  async findToken(refreshToken: string) {
    return this.tokenModel.findOne({ refreshToken })
  }

  async validateAccessToken(token) {
    const userData = verify(token, 'ЗАМЕНИ МЕНЯ')
    return typeof userData === 'string' ? null : userData
  }

  async validateRefreshToken(token) {
    const userData = verify(token, 'ЗАМЕНИ МЕНЯ2')
    return typeof userData === 'string' ? null : userData
  }
}
