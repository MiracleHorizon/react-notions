import { Module } from '@nestjs/common'
import { PageController } from './page.controller'
import { PageService } from './page.service'
import { MongooseModule } from '@nestjs/mongoose'
import { Page, PageSchema } from './schemas/page.schema'
import {
  TasksList,
  TasksListSchema,
} from '../tasksList/schemas/tasksList.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]),
    MongooseModule.forFeature([
      { name: TasksList.name, schema: TasksListSchema },
    ]),
  ],
  controllers: [PageController],
  providers: [PageService],
})
export class PageModule {}
