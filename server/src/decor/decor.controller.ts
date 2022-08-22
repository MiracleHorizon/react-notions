import { Controller, Get, Query } from '@nestjs/common'

@Controller('decor')
export class DecorController {
  @Get('/covers')
  getCovers(@Query('count') count: number, @Query('offset') offset: number) {}

  @Get('/icons')
  getIcons(@Query('count') count: number, @Query('offset') offset: number) {}
}
