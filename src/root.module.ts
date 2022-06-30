import { Module } from '@nestjs/common';
import { PostModule } from './POST/post.module';
import { BookModule } from './book/book.module';


@Module({
  imports: [PostModule, BookModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
