import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common'
import { TasksListService } from './tasksList.service'
import { CreateTasksListDto } from './dto/create-tasks-list.dto'
import { ObjectId } from 'mongoose'
import UpdateTasksListDto from './dto/update-tasks-list.dto'

@Controller('workspace/lists')
export class TasksListController {
  constructor(private tasksListService: TasksListService) {}

  @Post()
  create(@Body() dto: CreateTasksListDto) {
    return this.tasksListService.create(dto)
  }

  @Get('/page/:id')
  getAll(@Param('id') id: ObjectId) {
    return this.tasksListService.getAll(id)
  }

  @Patch(':id')
  update(@Param('id') id: ObjectId, @Body() tasksList: UpdateTasksListDto) {
    return this.tasksListService.update(id, tasksList)
  }

  @Delete(':id')
  delete(@Param('id') id: ObjectId) {
    return this.tasksListService.delete(id)
  }
}
