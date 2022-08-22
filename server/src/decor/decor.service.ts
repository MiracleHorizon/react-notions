import { Injectable } from '@nestjs/common'
import * as fs from 'fs'

@Injectable()
export class DecorService {
  async getCovers(count = 20, offset = 0) {
    // fs.read('').skip(offset).limit(count)
  }

  async getIcons(count = 60, offset = 0) {}
}
