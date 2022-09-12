import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'

import { Cover, CoverDocument } from './schemas/cover.schema'
import { CoverList, CoverListDocument } from './schemas/cover-list.schema'
import { Emoji, EmojiDocument } from './schemas/emoji.schema'
import { EmojiList, EmojiListDocument } from './schemas/emoji-list.schema'

@Injectable()
export class DecorService {
  constructor(
    @InjectModel(Cover.name) private CoverModel: Model<CoverDocument>,
    @InjectModel(Emoji.name) private EmojiModel: Model<EmojiDocument>,
    @InjectModel(CoverList.name)
    private CoverListModel: Model<CoverListDocument>,
    @InjectModel(EmojiList.name)
    private EmojiListModel: Model<EmojiListDocument>
  ) {}

  async getCoversLists(limit: number, offset: number) {
    const allLists = await this.CoverListModel.find()
    const lists = await this.CoverListModel.find()
      .populate('content')
      .skip(offset)
      .limit(limit)

    return { total: allLists.length, lists }
  }

  async getEmojiLists(limit: number, offset: number) {
    const allLists = await this.EmojiListModel.find()
    const lists = await this.EmojiListModel.find()
      .populate('content')
      .skip(offset)
      .limit(limit)

    return { total: allLists.length, lists }
  }
}
