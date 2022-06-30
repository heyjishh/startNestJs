import { Module } from '@nestjs/common';
import { PostModule } from './POST/post.module';
import { UsersModule } from './users/users.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [PostModule, UsersModule, ChatModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
