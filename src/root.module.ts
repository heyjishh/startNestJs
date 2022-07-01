import { Module } from '@nestjs/common';
import { PostModule } from './post/post.module';
import { InterceptorsModule } from './interceptors/interceptors.module';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';



@Module({
  imports: [PostModule, InterceptorsModule, AuthModule, UserModule],
  controllers: [],
  providers: [],
})
export class RootModule {
  constructor() {
    console.log('Root Module');
  }
}
