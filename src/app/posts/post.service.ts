import { Post } from './post.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PostsService {
  private post: Post[] = [];

  getPosts() {
    return [...this.post];
  }

  AddPost(title: string, content: string) {
    const post: Post = {title: title, content: content};
    this.post.push(post);
  }
}
