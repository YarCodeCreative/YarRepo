import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { Post } from '../post.model';
import { PostsService } from '../post.service';
import { from } from 'rxjs';


@Component({
  selector : 'app-post-list',
  templateUrl:  './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent implements OnInit, OnDestroy {
/*   posts = [
    {title: 'First Post', content: 'This is the 1st post'},
    {title: 'Second Post', content: 'This is the 2nd post'},
    {title: 'Third Post', content: 'This is the 3rd post'}
  ]; */
  posts: Post[] = [];
  private postsSub: Subscription;

  constructor(public postsService: PostsService) {}

  ngOnInit () {
    this.postsService.getPosts();
    this.postsSub = this.postsService.getPostUpdateListener()
      .subscribe((posts: Post[]) => {
        this.posts = posts;
      });
  }

  ngOnDestroy() {
    this.postsSub.unsubscribe();
  }
}




