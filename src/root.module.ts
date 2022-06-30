import { Module } from '@nestjs/common';
import { PostModule } from './POST/post.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [PostModule, UsersModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
