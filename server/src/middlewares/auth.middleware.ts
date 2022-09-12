import { Injectable, NestMiddleware } from '@nestjs/common'
import { NextFunction, Response } from 'express'

import { TokenService } from 'app/user/token/token.service'

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  constructor(private tokenService: TokenService) {}

  use(req: any, res: Response, next: NextFunction) {
    const authorizationHeader = req.headers.authorization
    if (!authorizationHeader) {
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
