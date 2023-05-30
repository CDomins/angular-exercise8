import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogFormComponent } from './pages/blog-form.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BlogListComponent } from './pages/blog-list/blog-list.component';


@NgModule({
  declarations: [
    BlogFormComponent,
    BlogItemComponent,
    BlogListComponent
  ],
  imports: [
    CommonModule,
    BlogRoutingModule,
    ReactiveFormsModule
  ]
})
export class BlogModule { }
