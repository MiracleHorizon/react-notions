import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { AuthMiddleware } from 'middlewares/auth.middleware'
import { AuthService } from './auth.service'
import { MailService } from 'app/user/mail/mail.service'
import { TokenService } from 'app/user/token/token.service'
import { AuthController } from './auth.controller'
import { User, UserSchema } from './schemas/user.schema'
import { Token, TokenSchema } from 'app/user/token/schemas/token.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Token.name, schema: TokenSchema }]),
  ],
  providers: [AuthService, TokenService, MailService],
  controllers: [AuthController],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'auth/all', method: RequestMethod.GET })
  }
}
