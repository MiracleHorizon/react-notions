import { Controller, Delete, Get, Post } from '@nestjs/common'

@Controller('/workspace/trash')
export class PagesTrashController {
  @Post()
  add() {}

  @Get()
  getAll() {}

  @Delete()
  delete() {}
}
