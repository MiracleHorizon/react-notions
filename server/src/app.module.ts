import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ConfigModule } from '@nestjs/config'
import { ServeStaticModule } from '@nestjs/serve-static'
import * as path from 'path'

import { PageModule } from './page/page.module'
import { UserModule } from './auth/user/user.module'
import { FilesModule } from './files/files.module'
import { DecorModule } from './decor/decor.module'
import { TasksListModule } from './tasksList/tasksList.module'
import { NotionContentItemModule } from './notionContentItem/notionContentItem.module'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot('mongodb+srv://admin:Ayq6UdX4zw_**Uy@cluster0.x9tps9r.mongodb.net/?retryWrites=true&w=majority'),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    PageModule,
    TasksListModule,
    NotionContentItemModule,
    FilesModule,
    DecorModule,
    UserModule,
  ],
})
export class AppModule {}
