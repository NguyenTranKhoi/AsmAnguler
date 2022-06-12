import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './layouts/blog/blog.component';
import { DetailWorksComponent } from './layouts/detail-works/detail-works.component';
import { HomeComponent } from './layouts/home/home.component';
import { WorksComponent } from './layouts/works/works.component';
import { ListPostComponent } from './admin/list-post/list-post.component';
import { AddPostComponent } from './admin/add-post/add-post.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "blog", component: BlogComponent },
  { path: "works", component: WorksComponent },
  { path: "detailwork", component: DetailWorksComponent },
  {
    path: "post", children: [
      { path: "", redirectTo: "list", pathMatch: "full" },
      { path: "list", component: ListPostComponent },
      { path: "addpost", component: AddPostComponent },
      { path: "edit/:id", component: AddPostComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
