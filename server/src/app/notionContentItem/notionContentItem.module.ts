import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import NotionContentItemService from './notionContentItem.service'
import NotionContentItemController from './notionContentItem.controller'
import { Page, PageSchema } from 'app/page/schemas/page.schema'
import {
  NotionContentItem,
  NotionContentItemSchema,
} from './schemas/notionContentItem.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]),
    MongooseModule.forFeature([
      { name: NotionContentItem.name, schema: NotionContentItemSchema },
    ]),
  ],
  controllers: [NotionContentItemController],
  providers: [NotionContentItemService],
})
export class NotionContentItemModule {}
