import { Injectable, NestMiddleware } from '@nestjs/common'
import { TokenService } from '../auth/token/token.service'
import { NextFunction, Request, Response } from 'express'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private tokenService: TokenService) {}

  use(req: any, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) {
      // throw new Error('Unauthorized')
      return res.json({ message: 'Пользователь не авторизован' })
    }

    const accessToken = authorizationHeader.split(' ')[1]
    if (!accessToken) {
      return res.json({ message: 'Пользователь не авторизован' })
    }

    const userData = this.tokenService.validateAccessToken(accessToken)
    if (!userData) {
      return res.json({ message: 'Пользователь не авторизован' })
    }

    req.user = userData
    next()
  }
}
