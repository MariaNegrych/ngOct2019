import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostResolveService} from './services/post-resolve.service';


const routes: Routes = [

  {
    // users/:id
    path: '',
    children: [
      // users/:id/posts
      {
        path: 'posts',
        component: AllPostsComponent, // all-posts.html
        resolve: {xxx: PostResolveService}
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
