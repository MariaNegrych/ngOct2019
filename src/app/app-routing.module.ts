import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {HelloComponent} from './hello/hello.component';


const routes: Routes = [
  {path: '', component: HelloComponent},
  {path: 'users', loadChildren: () => import('./user-module/user.module').then(m => m.UserModule)},


];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],

})
export class AppRoutingModule {
}
