import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import * as cookieParser from 'cookie-parser'

const startApp = async () => {
  try {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)

    app.use(cookieParser())
    app.enableCors({ credentials: true, origin: process.env.CLIENT_API })
    await app.listen(PORT, () => console.log(`Sever start on port: ${PORT}`))
  } catch (err) {
    throw new Error()
  }
}

startApp()
  .then(() => console.log('SERVER OK'))
  .catch(() => console.error('SERVER ERROR'))
