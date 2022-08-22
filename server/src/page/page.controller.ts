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
import { PageService } from './page.service'
import CreatePageDto from './dto/create-page.dto'
import UpdatePageDto from './dto/update-page.dto'
import { FileFieldsInterceptor } from '@nestjs/platform-express'

@Controller('workspace/pages') //! Убрать workspace
export class PageController {
  constructor(private pageService: PageService) {}

  @Post()
  create(@Body() dto: CreatePageDto) {
    return this.pageService.create(dto)
  }

  @Get('user/:authorId')
  getAll(@Param('authorId') authorId: string) {
    return this.pageService.getAll(authorId)
  }

  @Get('user/trash/:author')
  getTrashPages(@Param('author') author: string) {
    return this.pageService.getTrashPages(author)
  }

  @Get('move/:authorId/:id')
  getPagesToMove(
    @Param('authorId') authorId: string,
    @Param('id') excludePageId: string
  ) {
    return this.pageService.getPagesToMove(authorId, excludePageId)
  }

  @Get('list/:id')
  getByList(@Param('id') listId: ObjectId) {
    return this.pageService.getByList(listId)
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

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    // При удалении страницы, удалять все страницы - таски.
    // И notion content итемы.
    return this.pageService.delete(id).then(() => id)
  }

  @Delete()
  deleteAll() {
    return this.pageService.deleteAll()
  }

  @Delete('files/:fileName')
  deleteFile(@Param('fileName') fileName: string) {
    return this.pageService.deleteFile(fileName)
  }

  @Get('search/:authorId')
  search(@Query('query') query: string, @Param('authorId') authorId: string) {
    return this.pageService.search(query, authorId)
  }

  @Get('search/trash/:author')
  searchDeletedPages(
    @Query('query') query: string,
    @Param('author') author: string
  ) {
    return this.pageService.searchDeletedPages(query, author)
  }

  @Get('search/move/:authorId/:id')
  searchPagesToMove(
    @Query('query') query: string,
    @Param('authorId') authorId: string,
    @Param('id') excludePageId: string
  ) {
    return this.pageService.searchPagesToMove(authorId, excludePageId, query)
  }
}
