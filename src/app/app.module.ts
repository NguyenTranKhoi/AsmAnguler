import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layouts/home/home.component';
import { BlogComponent } from './layouts/blog/blog.component';
import { WorksComponent } from './layouts/works/works.component';
import { DetailWorksComponent } from './layouts/detail-works/detail-works.component';

import { HttpClientModule } from '@angular/common/http';
import { ListPostComponent } from './admin/list-post/list-post.component';
import { AddPostComponent } from './admin/add-post/add-post.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    WorksComponent,
    DetailWorksComponent,
    ListPostComponent,
    AddPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
