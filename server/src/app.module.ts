import { Module } from '@nestjs/common'
import { MongooseModule } from '@nestjs/mongoose'
import { ServeStaticModule } from '@nestjs/serve-static'
import { PageModule } from './page/page.module'
import { PagesTrashModule } from './pagesTrash/pagesTrash.module'
import { TasksListModule } from './tasksList/tasksList.module'
import * as path from 'path'

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static'),
    }),
    MongooseModule.forRoot(
      'mongodb+srv://admin:Ayq6UdX4zw_**Uy@cluster0.x9tps9r.mongodb.net/?retryWrites=true&w=majority'
    ),
    PageModule,
    PagesTrashModule,
    TasksListModule,
  ],
})
export class AppModule {}
