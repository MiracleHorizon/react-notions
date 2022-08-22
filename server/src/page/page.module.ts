import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'

import { PageController } from './page.controller'
import { PageService } from './page.service'
import { Page, PageSchema } from './schemas/page.schema'
import { FilesModule } from '../files/files.module'
import {
  TasksList,
  TasksListSchema,
} from '../tasksList/schemas/tasksList.schema'
import { FilesService } from '../files/files.service'

@Module({
  imports: [
    FilesModule,
    MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]),
    MongooseModule.forFeature([
      { name: TasksList.name, schema: TasksListSchema },
    ]),
  ],
  controllers: [PageController],
  providers: [PageService, FilesService],
})
export class PageModule {}
