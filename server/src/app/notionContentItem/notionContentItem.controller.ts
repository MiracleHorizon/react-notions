import { Body, Controller, Delete, Param, Patch, Post } from '@nestjs/common'
import { ObjectId } from 'mongoose'

import NotionContentItemService from './notionContentItem.service'
import CreateNotionContentItemDto from './dto/create-notionContentItem.dto'
import UpdateNotionContentItemDto from './dto/update-notionContentItem.dto'

@Controller('notions/content')
export default class NotionContentItemController {
  constructor(private notionContentItemService: NotionContentItemService) {}

  @Post()
  create(@Body() dto: CreateNotionContentItemDto) {
    return this.notionContentItemService.create(dto)
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateNotionContentItemDto) {
    return this.notionContentItemService.update(id, dto)
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.notionContentItemService.delete(id)
  }
}
