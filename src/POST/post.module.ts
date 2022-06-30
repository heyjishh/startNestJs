import { PostController } from './post.controller';
import { PostService } from './post.service';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { PostMiddleware } from './post.middleware';

@Module({
  imports: [],
  controllers: [PostController],
  providers: [PostService],
})
export class PostModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(PostMiddleware).forRoutes('post'); // here You select any path whew you want to use this class based middleware
  }
}
