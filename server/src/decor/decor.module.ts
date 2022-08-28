import { Module } from '@nestjs/common'
import { DecorService } from './decor.service'
import { DecorController } from './decor.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Cover, CoverSchema } from './schemas/cover.schema'
import { CoverList, CoverListSchema } from './schemas/cover-list.schema'
import { EmojiList, EmojiListSchema } from './schemas/emoji-list.schema'
import { Emoji, EmojiSchema } from './schemas/emoji.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Cover.name, schema: CoverSchema }]),
    MongooseModule.forFeature([
      { name: CoverList.name, schema: CoverListSchema },
    ]),
    MongooseModule.forFeature([{ name: Emoji.name, schema: EmojiSchema }]),
    MongooseModule.forFeature([
      { name: EmojiList.name, schema: EmojiListSchema },
    ]),
  ],
  providers: [DecorService],
  controllers: [DecorController],
})
export class DecorModule {}
