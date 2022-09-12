import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'

import { PageModule } from 'app/page/page.module'
import { AuthModule } from 'app/user/auth/auth.module'
import { MailModule } from 'app/user/mail/mail.module'
import { TokenModule } from 'app/user/token/token.module'
import { UserModule } from 'app/user/main/user.module'
import { FilesModule } from 'app/files/files.module'
import { DecorModule } from 'app/decor/decor.module'
import { TasksListModule } from 'app/tasksList/tasksList.module'
import { NotionContentItemModule } from 'app/notionContentItem/notionContentItem.module'

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_API),
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    PageModule,
    TasksListModule,
    NotionContentItemModule,
    FilesModule,
    DecorModule,
    AuthModule,
    UserModule,
    MailModule,
    TokenModule,
  ],
})
export class AppModule {}
