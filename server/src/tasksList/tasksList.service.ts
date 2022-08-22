import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { TasksList, TasksListDocument } from './schemas/tasksList.schema'
import { CreateTasksListDto } from './dto/create-tasks-list.dto'
import UpdateTasksListDto from './dto/update-tasks-list.dto'
import { Page, PageDocument } from '../page/schemas/page.schema'

@Injectable()
export class TasksListService {
  constructor(
    @InjectModel(TasksList.name)
    private tasksListModel: Model<TasksListDocument>,
    @InjectModel(Page.name) private pageModel: Model<PageDocument>
  ) {}

  async create(dto: CreateTasksListDto): Promise<TasksList> {
    const pageLists = await this.tasksListModel.find({
      parentPageId: dto.parentPageId,
    })

    return this.tasksListModel.create({
      ...dto,
      hidden: false,
      dependencies: [],
      order: pageLists.length,
    })
  }

  async getAll(id: ObjectId): Promise<TasksList[]> {
    return this.tasksListModel
      .find({ parentPageId: id })
      .populate('dependencies')
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    await this.pageModel.deleteMany({ parentListId: id })

    return this.tasksListModel.findByIdAndDelete(id)
  }

  async update(id: ObjectId, updateData: UpdateTasksListDto) {
    const tasksList = await this.tasksListModel.findByIdAndUpdate(
      { _id: id },
      updateData
    )

    if (!tasksList) throw new NotFoundException()

    return tasksList
  }
}
