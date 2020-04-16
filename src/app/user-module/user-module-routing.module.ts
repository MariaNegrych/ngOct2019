import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AllUsersComponent} from './components/all-users/all-users.component';
import {UserResolverService} from './services/user-resolver.service';
import {AllPostsComponent} from '../post-module/components/all-posts/all-posts.component';
import {PostResolveService} from '../post-module/services/post-resolve.service';


// const routes: Routes = [
//   // localhos:4200/users ->all Users Cpmponent
//   {
//     path: 'users',
//     component: AllUsersComponent, // app.component.html in -> router outlet
//     resolve: {allUsers: UserResolverService},
//     loadChildren: () => import('../post-module/post-module.module').then(m => m.PostModuleModule)
//   }
//
// ];

const routes: Routes = [

  {
    path: '', // /users
    component: AllUsersComponent, // app.component.html in -> router outlet
    resolve: {allUsers: UserResolverService},
    children: [
      // users/
      {path: '', loadChildren: () => import('../post-module/post-module.module').then(m => m.PostModuleModule)}

    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule {
}
