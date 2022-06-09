import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './layouts/blog/blog.component';
import { DetailWorksComponent } from './layouts/detail-works/detail-works.component';
import { HomeComponent } from './layouts/home/home.component';
import { WorksComponent } from './layouts/works/works.component';

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "", component: BlogComponent },
  { path: "", component: WorksComponent },
  { path: "", component: DetailWorksComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
