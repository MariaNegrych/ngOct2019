import {Component, OnInit} from '@angular/core';
import {PostService} from '../../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';

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
    private router: Router,
  ) {

    console.log(!!this.activatedRoute.snapshot.params.id);
    if (this.activatedRoute.snapshot.params.id) {
      this.activatedRoute
        .params
        .subscribe(params =>
          this.postService
            .getPostsOfUserById(params.id)
            .subscribe(postsFromServer => this.posts = postsFromServer));
    } else {
      this.activatedRoute.data.subscribe(value => {
        console.log(value.allPosts);
        this.posts = value.allPosts;
      });

    }


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
