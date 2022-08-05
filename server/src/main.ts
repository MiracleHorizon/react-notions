import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'

const startApp = async () => {
  try {
    const PORT = process.env.PORT || 5000
    const app = await NestFactory.create(AppModule)

    app.enableCors()
    await app.listen(PORT, () => console.log(`Sever start on port: ${PORT}`))
  } catch (err) {
    throw new Error()
  }
}

startApp()
  .then(() => console.log('SERVER OK'))
  .catch(() => console.error('SERVER ERROR'))
