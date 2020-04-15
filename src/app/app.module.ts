import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HelloComponent} from './hello/hello.component';
import {PostComponent} from './post-module/components/post/post.component';
import {AllPostsComponent} from './post-module/components/all-posts/all-posts.component';
import {AppRoutingModule} from './app-routing.module';
import {UserModule} from './user-module/user.module';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    UserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
