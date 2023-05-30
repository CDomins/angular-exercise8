import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BlogFormComponent } from './pages/blog-form.component';
import { BlogListComponent } from './pages/blog-list/blog-list.component';

const routes: Routes =[
  {
    path:'',
    component: BlogListComponent
  },
  {
    path: 'form',
    component: BlogFormComponent
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
