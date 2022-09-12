import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { UserService } from './user.service'
import { MailService } from 'app/user/mail/mail.service'
import { FilesService } from 'app/files/files.service'
import { PageService } from 'app/page/page.service'
import { UserController } from './user.controller'
import { User, UserSchema } from 'app/user/auth/schemas/user.schema'
import { Page, PageSchema } from 'app/page/schemas/page.schema'
import {
  TasksList,
  TasksListSchema,
} from 'app/tasksList/schemas/tasksList.schema'
import {
  NotionContentItem,
  NotionContentItemSchema,
} from 'app/notionContentItem/schemas/notionContentItem.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]),
    MongooseModule.forFeature([
      { name: TasksList.name, schema: TasksListSchema },
    ]),
    MongooseModule.forFeature([
      { name: NotionContentItem.name, schema: NotionContentItemSchema },
    ]),
  ],
  providers: [UserService, MailService, FilesService, PageService],
  controllers: [UserController],
})
export class UserModule {}
