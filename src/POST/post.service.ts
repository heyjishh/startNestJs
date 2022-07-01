import { Injectable } from '@nestjs/common';

import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';

@Injectable()
export class PostService {

  private readonly posts: CreatePostDto[] = [];
  create(posts: CreatePostDto) {
    this.posts.push(posts);
    return 'This action adds a new post';
  }

  findAll() {
    return this.posts.map(post => {
      return post;
    });
  }

  findOne(name: string) {
    return this.posts.filter(post => post.name == name);
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(name: string) {
    return this.posts.filter(post => post.name != name);
  }
}
