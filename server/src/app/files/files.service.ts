import { HttpException, Injectable } from '@nestjs/common'
import * as path from 'path'
import * as fs from 'fs'
import * as uuid from 'uuid'

export enum FileType {
  // AUDIO = 'audio',
  // VIDEO = 'video',
  IMAGE = 'image',
}

@Injectable()
export class FilesService {
  createFile(type: FileType, file) {
    try {
      const fileExtension = file.originalname.split('.').pop()
      const fileName = uuid.v4() + '.' + fileExtension
      const filePath = path.resolve(__dirname, '..', 'static', type)

      if (!fs.existsSync(filePath)) {
        fs.mkdirSync(filePath, { recursive: true })
      }

      fs.writeFileSync(path.resolve(filePath, fileName), file.buffer)

      return type + '/' + fileName
    } catch (e) {
      throw new HttpException(e.message, 500)
    }
  }
}
