import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'

import { FilesService, FileType } from 'app/files/files.service'
import { Page, PageDocument } from './schemas/page.schema'
import CreatePageDto from './dto/create-page.dto'
import UpdatePageDto from './dto/update-page.dto'
import {
  TasksList,
  TasksListDocument,
} from 'app/tasksList/schemas/tasksList.schema'
import {
  NotionContentItem,
  NotionContentItemDocument,
} from 'app/notionContentItem/schemas/notionContentItem.schema'
import { DEFAULT_PAGE_PARAMS } from 'utils/constants'

@Injectable()
export class PageService {
  constructor(
    private filesService: FilesService,
    @InjectModel(Page.name) private pageModel: Model<PageDocument>,
    @InjectModel(TasksList.name)
    private tasksListModel: Model<TasksListDocument>,
    @InjectModel(NotionContentItem.name)
    private notionContentItemModel: Model<NotionContentItemDocument>
  ) {}

  async create(dto: CreatePageDto): Promise<Page> {
    const page = await this.pageModel.create({
      ...dto,
      ...DEFAULT_PAGE_PARAMS,
    })

    // 'parentListId' in dto && dto.parentListId !== null
    // page.taskOrder = parentList.dependencies.length

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
  } // Переработать.

  async getOne(id: ObjectId): Promise<Page | string> {
    return this.pageModel
      .findOne({ _id: id, deleted: false })
      .populate('dependencies')
      .populate('content')
  }

  async getByList(listId: ObjectId): Promise<Page[]> {
    return this.pageModel.find({ parentListId: listId, deleted: false })
  }

  async update(id: ObjectId, updateData: UpdatePageDto) {
    const page = await this.pageModel.findByIdAndUpdate({ _id: id }, updateData)

    if (!page) throw new NotFoundException()

    if ('parentPageId' in updateData) {
      // const page = await this.pageModel.findOne({ _id: id })
      // const prevParent = await this.pageModel.findById(page.parentPageId)
    }

    if ('template' in updateData && updateData.template === 'NotionsDatabase') {
      const noStatusList = await this.tasksListModel.create({
        parentPageId: page._id,
        title: 'NO_STATUS',
        color: 'empty',
      })

      const newPageBody = {
        parentPageId: page._id,
        parentListId: noStatusList._id,
        title: '',
        status: noStatusList._id,
        author: page.author,
      }

      await this.pageModel.create({
        ...newPageBody,
        ...DEFAULT_PAGE_PARAMS,
      })
    }

    return page
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

  async deleteAll(id: ObjectId) {
    await this.pageModel.deleteMany({ author: id })
    await this.tasksListModel.deleteMany({ author: id })
    await this.notionContentItemModel.deleteMany({ author: id })
  }

  async search(author: string, query: string, offset: number) {
    const INITIAL_OFFSET = 15

    const allPages = await this.pageModel.find({
      $regex: new RegExp(query, 'i'),
      deleted: false,
      author,
    })

    const sortParams =
      query === ''
        ? {
            deleted: false,
            author,
          }
        : {
            title: { $regex: new RegExp(query, 'i') },
            deleted: false,
            author,
          }

    const pages = await this.pageModel
      .find(sortParams)
      .limit(INITIAL_OFFSET + +offset)

    return { total: allPages.length, pages }
  }

  async searchDeletedPages(author: string, query: string, offset: number) {
    const INITIAL_OFFSET = 20

    const allPages = await this.pageModel.find({
      $regex: new RegExp(query, 'i'),
      deleted: true,
      author,
    })

    const sortParams =
      query === ''
        ? {
            deleted: true,
            author,
          }
        : {
            title: { $regex: new RegExp(query, 'i') },
            deleted: true,
            author,
          }

    const pages = await this.pageModel
      .find(sortParams)
      .limit(INITIAL_OFFSET + +offset)

    return { total: allPages.length, pages }
  }

  async searchPagesByList(listId: string, query: string, offset: number) {
    const INITIAL_OFFSET = 10

    const allPages = await this.pageModel.find({
      $regex: new RegExp(query, 'i'),
      parentListId: listId,
      deleted: false,
    })

    const sortParams =
      query === ''
        ? {
            parentListId: listId,
            deleted: false,
          }
        : {
            parentListId: listId,
            title: { $regex: new RegExp(query, 'i') },
            deleted: false,
          }

    const pages = await this.pageModel
      .find(sortParams)
      .limit(INITIAL_OFFSET + +offset)

    return { total: allPages.length, pages }
  }

  async searchPagesToMove(
    author: string,
    excludePageId: string,
    query: string,
    offset: number
  ) {
    const INITIAL_OFFSET = 10

    const allPages = await this.pageModel.find({
      $regex: new RegExp(query, 'i'),
      deleted: false,
      parentListId: null,
      status: null,
      author,
    })

    const sortParams =
      query === ''
        ? {
            parentListId: null,
            status: null,
            deleted: false,
            author,
          }
        : {
            title: { $regex: new RegExp(query, 'i') },
            parentListId: null,
            status: null,
            deleted: false,
            author,
          }

    const pages = await this.pageModel
      .find(sortParams)
      .limit(INITIAL_OFFSET + +offset)

    return {
      total: allPages.length - 1,
      pages: pages.filter(page => page._id.toString() !== excludePageId),
    }
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
}
