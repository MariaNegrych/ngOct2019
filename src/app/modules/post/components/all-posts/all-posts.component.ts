import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all-posts',
  templateUrl: './all-posts.component.html',
  styleUrls: ['./all-posts.component.css']
})
export class AllPostsComponent implements OnInit {

  posts: PostModel[];

  constructor(
    private postService: PostService,
    private activatedRoute: ActivatedRoute,
  ) {


    // this.activatedRoute
    //   .params
    //   .subscribe(params =>
    //     this.postService
    //       .getPostsOfUserById(params.id)
    //       .subscribe(postsFromServer => {
    //         if (postsFromServer.length) {
    //           this.posts = postsFromServer;
    //         }
    //       }));

    this.activatedRoute.data.subscribe(value => {
      this.posts = value.xxx;
    });


    //
    // this.activatedRoute.queryParams.subscribe(queyParams =>
    //   this.postService
    //     .getPostsOfUserById(queyParams.idOfUser)
    //     .subscribe(value => console.log(value))
    // );
    //
    // this.postService
    //   .getPostsOfUserById(this.router.getCurrentNavigation().extras.state.user.id)
    //   .subscribe(value => console.log(value));

  }

  ngOnInit() {
  }

}
