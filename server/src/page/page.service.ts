import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import { Page, PageDocument } from './schemas/page.schema'
import CreatePageDto from './dto/create-page.dto'
import UpdatePageDto from './dto/update-page.dto'
import {
  TasksList,
  TasksListDocument,
} from '../tasksList/schemas/tasksList.schema'

const defaultDescription = `Use this template to track your personal tasks.
Click + New to create a new task directly on this board.
Click an existing task to add additional context or subtasks.`

@Injectable()
export class PageService {
  constructor(
    @InjectModel(Page.name) private pageModel: Model<PageDocument>,
    @InjectModel(TasksList.name)
    private tasksListModel: Model<TasksListDocument>
  ) {}

  async create(dto: CreatePageDto): Promise<Page> {
    const page = await this.pageModel.create({
      ...dto,
      template: 'Notion',
      fullWidth: false,
      smallText: false,
      favorite: false,
      expanded: false,
      locked: false,
      iconUrl: null,
      coverUrl: null,
      coverPosition: 50,
      descriptionExpanded: true,
      description: defaultDescription,
      font: 'Default',
      dependencies: [],
      content: [],
      sbOrder: null,
      taskOrder: null,
    })

    if ('parentListId' in dto && dto.parentListId !== null) {
      const parentList = await this.tasksListModel.findById(dto.parentListId)
      const pageId: string = page._id

      parentList.dependencies.push(pageId)
      await parentList.save()

      page.taskOrder = parentList.dependencies.length
      await page.save()
    }

    if (dto.parentPageId === null && dto.parentListId === null) {
      const sidebarPages = await this.pageModel.find({
        parentPageId: null,
        parentListId: null,
        status: null,
      })

      page.sbOrder = sidebarPages.length + 1
      await page.save()
    }

    if (dto.parentPageId !== null && dto.parentListId === null) {
      const parentPage = await this.pageModel.findById(dto.parentPageId)

      parentPage.dependencies.push(page._id)
      await parentPage.save()
    }

    return page
  }

  async getAll(author: string): Promise<Page[]> {
    return this.pageModel.find({ author })
  }

  async getOne(id: ObjectId): Promise<Page | string> {
    return this.pageModel
      .findById(id)
      .populate('dependencies')
      .populate('content')
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const page = await this.pageModel.findById(id)

    if (page.parentListId !== null) {
      const list = await this.tasksListModel.findById(page.parentListId)

      list.dependencies = list.dependencies.filter(
        _id => _id.toString() !== id.toString()
      ) //!
      await list.save()
    }

    await this.pageModel.findOneAndUpdate(
      { parentPageId: id },
      { parentPageId: null }
    )

    await this.tasksListModel.deleteMany({ parentPageId: id })
    await this.pageModel.find({ sbOrder: null }).deleteMany()

    return this.pageModel.findByIdAndDelete(id)
  }

  async deleteAll() {
    return this.pageModel.deleteMany()
  }

  async update(id: ObjectId, updateData: UpdatePageDto) {
    const page = await this.pageModel.findByIdAndUpdate({ _id: id }, updateData)

    if (!page) throw new NotFoundException()

    if ('parentPageId' in updateData) {
      // const page = await this.pageModel.findOne({ _id: id })
      // const oldParent = await this.pageModel.findById(page.parentPageId)
    }

    if ('parentListId' in updateData) {
      const list = await this.tasksListModel.findById(updateData.parentListId)
      list.dependencies.push(page._id)
    }

    if ('template' in updateData && updateData.template === 'NotionsList') {
      await this.tasksListModel.create({
        title: 'NO_STATUS',
        parentPageId: page._id,
        color: 'empty',
      })
    }

    return page
  }
}
