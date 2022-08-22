import { Module } from '@nestjs/common';
import { DecorService } from './decor.service';
import { DecorController } from './decor.controller';

@Module({
  providers: [DecorService],
  controllers: [DecorController]
})
export class DecorModule {}
