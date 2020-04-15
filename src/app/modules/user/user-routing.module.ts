import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';
import {UserComponent} from './components/user/user.component';


const routes: Routes = [
  {
    path: '', // /users
    component: AllUsersComponent,
    resolve: {allUsers: UserResolverService},
    children: [
      {

        path: ':id', // users/:id
        component: UserComponent, // AllUsersComponent
        loadChildren: () => import('../post/post.module').then(m => m.PostModule)
      }
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule {
}
