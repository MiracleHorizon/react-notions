import { Injectable } from '@nestjs/common'
import { InjectModel, Prop } from '@nestjs/mongoose'
import { Cover, CoverDocument } from './schemas/cover.schema'
import { Model } from 'mongoose'
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

  async getCovers() {
    return this.CoverModel.find()
  }

  async test() {
    // await this.EmojiModel.deleteMany()
    // await this.EmojiListModel.deleteMany()

    // const arr = new Array(12).fill({
    //   imgUrl: 'emoji/symbols/trident.svg',
    //   tooltipTitle: 'Trident',
    // })
    // const list = await this.EmojiListModel.findById('630ace748418c9369e6b8cd8')
    // await Promise.all(arr.map(item => this.EmojiModel.create(item))).then(
    //   data =>
    //     data.forEach(item => {
    //       list.content.push(item._id.toString())
    //       list.save()
    //     })
    // )

    // return this.EmojiListModel.create({
    //   title: 'Symbols',
    //   content: [],
    // })
  }
}
