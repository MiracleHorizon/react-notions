import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { FilesModule } from 'app/files/files.module'
import { NotionContentItemModule } from 'app/notionContentItem/notionContentItem.module'
import { PageService } from './page.service'
import { FilesService } from 'app/files/files.service'
import { PageController } from './page.controller'
import { Page, PageSchema } from './schemas/page.schema'
import { TasksList, TasksListSchema } from 'app/tasksList/schemas/tasksList.schema'
import {
  NotionContentItem,
  NotionContentItemSchema,
} from 'app/notionContentItem/schemas/notionContentItem.schema'

@Module({
  imports: [
    FilesModule,
    NotionContentItemModule,
    MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]),
    MongooseModule.forFeature([
      { name: TasksList.name, schema: TasksListSchema },
    ]),
    MongooseModule.forFeature([
      { name: NotionContentItem.name, schema: NotionContentItemSchema },
    ]),
  ],
  controllers: [PageController],
  providers: [PageService, FilesService],
})
export class PageModule {}
