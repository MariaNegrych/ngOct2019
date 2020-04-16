import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllPostsComponent} from './components/all-posts/all-posts.component';
import {PostResolveService} from './services/post-resolve.service';


// const routes: Routes = [
//   {
//     // users
//     path: '',
//     children: [
//       {
//         path: ':id/posts',
//         component: AllPostsComponent // AllUsersComponent.html ->router-outlet
//       }
//     ]
//
//   }];
const routes: Routes = [
  {
    path: '',
    component: AllPostsComponent, // app.component.html
    resolve: {allPosts: PostResolveService}

  },
  {
    // /users/100/posts
    path: ':id/posts',
    component: AllPostsComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostModuleRoutingModule {
}
