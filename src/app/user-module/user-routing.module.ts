import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';
import {AllPostsComponent} from '../post-module/components/all-posts/all-posts.component';
import {PostResolveService} from '../post-module/services/post-resolve.service';


const routes: Routes = [
  {
    path: '',
    component: AllUsersComponent, // app.component.html
    resolve: {allUsers: UserResolverService},
    loadChildren: () => import('../post-module/post.module').then(m => m.PostModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
