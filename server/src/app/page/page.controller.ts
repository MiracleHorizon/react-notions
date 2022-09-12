import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UploadedFiles,
  UseInterceptors,
} from '@nestjs/common'
import { ObjectId } from 'mongoose'
import { FileFieldsInterceptor } from '@nestjs/platform-express'

import { PageService } from './page.service'
import CreatePageDto from './dto/create-page.dto'
import UpdatePageDto from './dto/update-page.dto'

@Controller('notions')
export class PageController {
  constructor(private pageService: PageService) {}

  @Post()
  create(@Body() dto: CreatePageDto) {
    return this.pageService.create(dto)
  }

  @Get('all/:author')
  getAll(@Param('author') author: string) {
    return this.pageService.getAll(author)
  }

  @Get(':id')
  getOne(@Param('id') id: ObjectId) {
    return this.pageService.getOne(id)
  }

  @Get('list/:id')
  getByList(@Param('id') listId: ObjectId) {
    return this.pageService.getByList(listId)
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() page: UpdatePageDto) {
    return this.pageService.update(id, page)
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.pageService.delete(id)
  }

  @Get('search/:author')
  search(
    @Query('query') query: string,
    @Query('offset') offset: number,
    @Param('author') author: string
  ) {
    return this.pageService.search(author, query, offset)
  }

  @Get('search/trash/:author')
  searchDeletedPages(
    @Query('query') query: string,
    @Query('offset') offset: number,
    @Param('author') author: string
  ) {
    return this.pageService.searchDeletedPages(author, query, offset)
  }

  @Get('search/list/:id')
  searchPagesByList(
    @Query('query') query: string,
    @Query('offset') offset: number,
    @Param('id') id: string
  ) {
    return this.pageService.searchPagesByList(id, query, offset)
  }

  @Get('search/move/:author/:id')
  searchPagesToMove(
    @Query('query') query: string,
    @Query('offset') offset: number,
    @Param('author') author: string,
    @Param('id') excludePageId: string
  ) {
    return this.pageService.searchPagesToMove(author, excludePageId, query, offset)
  }

  @Post('files/cover/:id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'coverUrl', maxCount: 1 }]))
  uploadCover(@UploadedFiles() file, @Param('id') id: ObjectId) {
    return this.pageService.uploadCover(id, file.coverUrl[0])
  }

  @Post('files/icon/:id')
  @UseInterceptors(FileFieldsInterceptor([{ name: 'iconUrl', maxCount: 1 }]))
  uploadIcon(@UploadedFiles() file, @Param('id') id: ObjectId) {
    return this.pageService.uploadIcon(id, file.iconUrl[0])
  }
}
