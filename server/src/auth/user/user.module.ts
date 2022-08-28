import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common'
import { UserService } from './user.service'
import { UserController } from './user.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { User, UserSchema } from './schemas/user.schema'
import { Token, TokenSchema } from '../token/schemas/token.schema'
import { MailService } from '../mail/mail.service'
import { TokenService } from '../token/token.service'
import { AuthMiddleware } from '../../middlewares/auth.middleware'
import { FilesService } from '../../files/files.service'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Token.name, schema: TokenSchema }]),
  ],
  providers: [UserService, TokenService, MailService, FilesService],
  controllers: [UserController],
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthMiddleware)
      .forRoutes({ path: 'auth/all', method: RequestMethod.GET })
  }
}
