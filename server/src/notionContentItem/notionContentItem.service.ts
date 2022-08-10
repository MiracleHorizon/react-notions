import { Injectable, NotFoundException } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model, ObjectId } from 'mongoose'
import CreateNotionContentItemDto from './dto/create-notionContentItem.dto'
import {
  NotionContentItem,
  NotionContentItemDocument,
} from './schemas/notionContentItem.schema'
import { Page, PageDocument } from '../page/schemas/page.schema'
import UpdateNotionContentItemDto from './dto/update-notionContentItem.dto'

@Injectable({})
export default class NotionContentItemService {
  constructor(
    @InjectModel(NotionContentItem.name)
    private notionContentItem: Model<NotionContentItemDocument>,
    @InjectModel(Page.name) private pageModel: Model<PageDocument>
  ) {}

  async create(dto: CreateNotionContentItemDto): Promise<NotionContentItem> {
    const { order, ...params } = dto
    const parentPage = await this.pageModel.findById(dto.parentPageId)
    const totalItems = parentPage.content.length

    if (order) {
      const contentItems = await this.notionContentItem.find({
        parentPageId: dto.parentPageId,
      })

      contentItems.forEach(item => {
        if (item.order >= order) {
          item.order += 1
          item.save()
        }
      })
    }

    const item = await this.notionContentItem.create({
      ...params,
      order: order ? order : totalItems,
      dependencies: [],
    })

    await parentPage.content.push(item._id)
    await parentPage.save()

    if (dto.parentItemId !== null) {
      const parentItem = await this.notionContentItem.findById(dto.parentItemId)

      parentItem.dependencies.push(item._id)
      await parentItem.save()
    }

    return item
  }

  // async getAll(id: string): Promise<NotionContentItem[]> {
  //   return this.notionContentItem.find({ parentPageId: id })
  // }

  // async getOne(author: string, _id: ObjectId): Promise<NotionContentItem> {
  //   return this.notionContentItem.findOne({ author, _id })
  // }

  async update(
    id: ObjectId,
    updateData: UpdateNotionContentItemDto
  ): Promise<NotionContentItem> {
    const item = await this.notionContentItem.findOneAndUpdate(updateData)

    if (updateData.order) {
      const parentPage = await this.pageModel.findById(item.parentPageId)
      const contentItems = await this.notionContentItem.find({
        parentPageId: item.parentPageId,
      })
    }

    if (!item) throw new NotFoundException()

    return item
  }

  async delete(id: ObjectId): Promise<ObjectId> {
    const item = await this.notionContentItem.findOne({ _id: id })
    const parentPage = await this.pageModel.findById(item.parentPageId)
    const contentItems = await this.notionContentItem.find({
      parentPageId: item.parentPageId,
    })

    contentItems.forEach(itm => {
      if (itm.order >= item.order) {
        itm.order -= 1
        itm.save()
      }
    })

    parentPage.content = parentPage.content.filter(
      itm => itm.toString() !== item._id.toString()
    )
    await parentPage.save()

    return this.notionContentItem.findByIdAndDelete(id).then(() => id)
  }
}
