import { Module } from '@nestjs/common'
import { PagesTrashService } from './pagesTrash.service'
import { PagesTrashController } from './pagesTrash.controller'

@Module({
  controllers: [PagesTrashController],
  providers: [PagesTrashService],
})
export class PagesTrashModule {}
