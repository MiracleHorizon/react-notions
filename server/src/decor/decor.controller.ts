import { Controller, Get, Query } from '@nestjs/common'
import { DecorService } from './decor.service'

@Controller('decor')
export class DecorController {
  constructor(private decorService: DecorService) {}

  @Get('/covers')
  getCoversLists(
    @Query('limit') limit: number,
    @Query('offset') offset: number
  ) {
    return this.decorService.getCoversLists(limit, offset)
  }

  @Get('/emojis')
  getEmojiLists(
    @Query('limit') limit: number,
    @Query('offset') offset: number
  ) {
    return this.decorService.getEmojiLists(limit, offset)
  }

  @Get('/test')
  test() {
    return this.decorService.test()
  }
}
