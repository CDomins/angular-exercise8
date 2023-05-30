import { Component } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from 'src/app/modules/blog/services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  constructor (private blogService: BlogService, private router: Router) {}

  blogs: Blog[] = this.blogService.getBlogs();

  edit = (id: number) => {
    this.router.navigate([`${this.router.url}/form`])
  };
}
