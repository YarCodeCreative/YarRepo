import { Component, Input } from '@angular/core';
import { Post } from '../post.model';


@Component({
  selector : 'app-post-list',
  templateUrl:  './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})

export class PostListComponent{
/*   posts = [
    {title: 'First Post', content: 'This is the 1st post'},
    {title: 'Second Post', content: 'This is the 2nd post'},
    {title: 'Third Post', content: 'This is the 3rd post'}
  ]; */
  @Input() posts: Post[]=[];
}




