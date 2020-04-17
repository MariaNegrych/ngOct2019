import {Component, Input, OnInit} from '@angular/core';
import {PostService} from '../../../post/services/post.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {


  @Input()
  comment: CommentModel;
  post: PostModel;


  constructor(private postService: PostService) {

  }


  ngOnInit() {
  }

  showPostOfComment(comment: CommentModel) {
    this.postService.getPost(comment.postId).subscribe(value => this.post = value);
  }
}
