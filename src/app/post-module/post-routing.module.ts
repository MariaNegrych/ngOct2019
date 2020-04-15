import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PostResolveService} from './services/post-resolve.service';
import {AllPostsComponent} from './components/all-posts/all-posts.component';


const routes: Routes = [
  {
    path: ':id/posts',
    component: AllPostsComponent, // app.component.html
    resolve: {xxx: PostResolveService}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule {
}
