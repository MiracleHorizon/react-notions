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
import { FilesService, FileType } from '../files/files.service'
import { DEFAULT_DESCRIPTION } from '../utils/constants'

@Injectable()
export class PageService {
  constructor(
    @InjectModel(Page.name) private pageModel: Model<PageDocument>,
    @InjectModel(TasksList.name)
    private tasksListModel: Model<TasksListDocument>,
    private filesService: FilesService
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
      description: DEFAULT_DESCRIPTION,
      font: 'Default',
      dependencies: [],
      content: [],
      sbOrder: null,
      taskOrder: null,
      deleted: false,
    })

    if ('parentListId' in dto && dto.parentListId !== null) {
      const parentList = await this.tasksListModel.findById(dto.parentListId)

      parentList.dependencies.push(page)
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
    return this.pageModel.find({ author, deleted: false })
  }

  async getTrashPages(author: string): Promise<Page[]> {
    return this.pageModel.find({ author, deleted: true })
  }

  async getOne(id: ObjectId): Promise<Page | string> {
    return this.pageModel
      .findOne({ _id: id, deleted: false })
      .populate('dependencies')
      .populate('content')
  }

  async getPagesToMove(author: string, excludePageId: string): Promise<Page[]> {
    const pages = await this.pageModel.find({
      parentListId: null,
      status: null,
      author,
      deleted: false,
    })

    return pages.filter(page => page._id.toString() !== excludePageId)
  }

  async getByList(listId: ObjectId): Promise<Page[]> {
    return this.pageModel.find({ parentListId: listId, deleted: false })
  }

  async update(id: ObjectId, updateData: UpdatePageDto) {
    const { parentListId } = updateData
    const page = await this.pageModel.findByIdAndUpdate({ _id: id }, updateData) //!
    // const page = await this.pageModel.findById(id)

    if (!page) throw new NotFoundException()

    if ('parentPageId' in updateData) {
      // const page = await this.pageModel.findOne({ _id: id })
      // const prevParent = await this.pageModel.findById(page.parentPageId)
    }

    if ('parentListId' in updateData && parentListId) {
      // Удаление страницы из зависимостей её прошлого списка задач.
      const previousList = await this.tasksListModel.findById(page.parentListId)
      previousList.dependencies = previousList.dependencies.filter(page => {
        return page.toString() !== id.toString()
      })
      await previousList.save()

      // Добавление страницы в зависимости её нового списка задач.
      const newList = await this.tasksListModel.findById(parentListId)
      console.log(newList)
      newList.dependencies.push(page._id)
      await newList.save()
    }

    if ('template' in updateData && updateData.template === 'NotionsList') {
      await this.tasksListModel.create({
        title: 'NO_STATUS',
        parentPageId: page._id,
        color: 'empty',
      })
    }

    // return this.pageModel.findByIdAndUpdate({ _id: id }, updateData)
    return page
  }

  async uploadCover(id: ObjectId, coverUrlFile: string) {
    const coverFilePath = this.filesService.createFile(
      FileType.IMAGE,
      coverUrlFile
    )

    return this.pageModel.findByIdAndUpdate(id, { coverUrl: coverFilePath })
  }

  async uploadIcon(id: ObjectId, iconUrlFile: string) {
    const iconFilePath = this.filesService.createFile(
      FileType.IMAGE,
      iconUrlFile
    )

    return this.pageModel.findByIdAndUpdate(id, { iconUrl: iconFilePath })
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    await this.pageModel.findOneAndUpdate(
      { parentPageId: id },
      { parentPageId: null }
    )

    await this.tasksListModel.deleteMany({ parentPageId: id })
    await this.pageModel.deleteMany({ parentPageId: id })

    return this.pageModel.findByIdAndDelete(id)
  }

  async deleteAll() {
    return this.pageModel.deleteMany()
  } //! Убрать.

  async deleteFile(fileName: string) {
    return this.filesService.deleteFile(fileName)
  }

  async search(query: string, author: string): Promise<Page[]> {
    return this.pageModel.find({
      title: { $regex: new RegExp(query, 'i') },
      deleted: false,
      author,
    })
  }

  async searchDeletedPages(query: string, author: string): Promise<Page[]> {
    return this.pageModel.find({
      title: { $regex: new RegExp(query, 'i') },
      deleted: true,
      author,
    })
  }

  async searchPagesToMove(
    authorId: string,
    excludePageId: string,
    query: string
  ): Promise<Page[]> {
    const pages = await this.pageModel.find({
      parentListId: null,
      title: { $regex: new RegExp(query, 'i') },
      status: null,
      author: authorId,
      deleted: false,
    })

    return pages.filter(page => page._id.toString() !== excludePageId)
  }
}
