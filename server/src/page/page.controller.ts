import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { PageService } from './page.service'
import CreatePageDto from './dto/create-page.dto'
import UpdatePageDto from './dto/update-page.dto'

@Controller('workspace/pages') //! Убрать workspace
export class PageController {
  constructor(private pageService: PageService) {}

  @Post()
  create(@Body() dto: CreatePageDto) {
    return this.pageService.create(dto)
  }

  @Get(`user/:authorId`)
  getAll(@Param('authorId') authorId: string) {
    return this.pageService.getAll(authorId)
  }

  @Get(':id')
  getOne(@Param('authorId') authorId: string, @Param('id') id: ObjectId) {
    return this.pageService.getOne(id)
  }

  // @Get('user/:authorId/:id')
  // getOne(@Param('authorId') authorId: string, @Param('id') id: ObjectId) {
  //   return this.pageService.getOne(id)
  // }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() page: UpdatePageDto) {
    return this.pageService.update(id, page)
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    // При удалении страницы, удалять все страницы - таски.
    return this.pageService.delete(id).then(() => id)
  }

  @Delete()
  deleteAll() {
    return this.pageService.deleteAll()
  }

  // @Post('/comment')
  // addComment(@Body() dto) {
  //   return this.pageService.addComment()
  // }
}
