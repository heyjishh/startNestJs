import { Injectable } from '@nestjs/common';
import { POST } from './data/post.dto';

@Injectable()
export class PostService {
  public posts: POST[] = [];

  //Create Post
  createPost(post: POST): string {
    this.posts.push(post);
    return 'Data has been inserted in books ';
  }

  //Update Post
  updatePost(post: POST): string {
    const index = this.posts.findIndex((currentBook) => {
      return currentBook._id == post._id;
    });
    this.posts[index] = post;
    return 'Post is Updated Successfully ';
  }

  //Delete Post
  deletePost(_id: number): string {
    this.posts = this.posts.filter((post) => {
      return post._id != _id;
    });
    return 'Post is Deleted Successfully';
  }

  //FInd ALl post
  findAllPost(): POST[] {
    return this.posts;
  }
}
