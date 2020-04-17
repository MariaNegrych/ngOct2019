import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';


const routes: Routes = [{
  // f->users
  path: '', component: AllUsersComponent, resolve: {allUsers: UserResolverService}, children: [
    {path: ':id', loadChildren: () => import('../post/post.module').then(m => m.PostModule)}
  ]

}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
