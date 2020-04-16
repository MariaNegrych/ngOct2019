import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {HelloComponent} from './hello/hello.component';
import {AppRoutingModule} from './app-routing.module';
import {UserModuleModule} from './user-module/user-module.module';
import {PostModuleModule} from './post-module/post-module.module';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
