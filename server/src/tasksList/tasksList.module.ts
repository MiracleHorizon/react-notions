import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { TasksListController } from './tasksList.controller'
import { TasksListService } from './tasksList.service'
import { TasksList, TasksListSchema } from './schemas/tasksList.schema'
import { Page, PageSchema } from '../page/schemas/page.schema'

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: TasksList.name, schema: TasksListSchema },
    ]),
    MongooseModule.forFeature([{ name: Page.name, schema: PageSchema }]),
  ],
  controllers: [TasksListController],
  providers: [TasksListService],
})
export class TasksListModule {}
