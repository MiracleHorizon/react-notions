import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import CreateNotionContentItemDto from './dto/create-notionContentItem.dto'
import NotionContentItemService from './notionContentItem.service'
import { ObjectId } from 'mongoose'
import UpdateNotionContentItemDto from './dto/update-notionContentItem.dto'

@Controller('workspace/pages/content')
export default class NotionContentItemController {
  constructor(private notionContentItemService: NotionContentItemService) {}

  @Post()
  create(@Body() dto: CreateNotionContentItemDto) {
    return this.notionContentItemService.create(dto)
  }

  // @Get('page/:id')
  // getAll(@Param('id') id: string) {
  //   return this.notionContentItemService.getAll(id)
  // }

  // @Get('user/:authorId/:id')
  // getOne(@Param('authorId') authorId: string, @Param('id') id: ObjectId) {
  //   return this.notionContentItemService.getOne(authorId, id)
  // }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() dto: UpdateNotionContentItemDto) {
    return this.notionContentItemService.update(id, dto)
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.notionContentItemService.delete(id)
  }
}
