import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

import { POST } from './data/post.dto';
import { PostService } from './post.service';

@Controller('post')
export class PostController {
  constructor(private post: PostService) {}

  @Get('post')
  getPOst(): POST[] {
    return this.post.findAllPost();
  }

  @Put('update-post')
  updatePost(@Body() post: POST): string {
    return this.post.updatePost(post);
  }

  @Post('create-post')
  createPost(@Body() post: POST): string {
    return this.post.createPost(post);
  }

  @Delete('delete-post')
  deletePost(@Param('_id') _id: number): string {
    return this.post.deletePost(_id);
  }
}
