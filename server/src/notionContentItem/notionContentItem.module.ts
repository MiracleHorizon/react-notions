import { Module } from '@nestjs/common'
import NotionContentItemService from './notionContentItem.service'
import NotionContentItemController from './notionContentItem.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Page, PageSchema } from '../page/schemas/page.schema'
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
export default class NotionContentItemModule {}
