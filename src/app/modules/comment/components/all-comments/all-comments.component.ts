import {Component, OnInit} from '@angular/core';
import {CommentService} from '../../services/comment.service';

@Component({
  selector: 'app-all-comments',
  templateUrl: './all-comments.component.html',
  styleUrls: ['./all-comments.component.css']
})
export class AllCommentsComponent implements OnInit {

  comments: CommentModel[];

  constructor(private commentService: CommentService) {
  }

  ngOnInit() {
    this.commentService.getAllComments().subscribe(value => this.comments = value);
  }

}
