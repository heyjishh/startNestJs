import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { InterceptorsModule } from './interceptors/interceptors.module';



@Module({
  imports: [PostModule, InterceptorsModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
