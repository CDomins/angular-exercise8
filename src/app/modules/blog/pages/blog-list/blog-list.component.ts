import { Component, OnInit } from '@angular/core';
import { Blog } from '../../models/blog';
import { BlogService } from 'src/app/modules/blog/services/blog.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent implements OnInit{
  constructor (private blogService: BlogService, private router: Router) {}
  
  sub: Subscription | undefined

  //blogs: Blog[] = this.blogService.getBlogs();

  blogs: any = [];
  ngOnInit(): void {
    this.blogService.getAllBlogs().subscribe((data) => {
      this.blogs = data;
      console.log(this.blogs)
    })
  }
  editBlog = (blog: Blog) => {
      this.blogService.getSingleBlog(blog.id).subscribe((data) => {
        // this.editBlog = data;
        console.log(data)
        this.router.navigate([`${this.router.url}/form`], {queryParams: data})
      })
      
  };

  delete = (blog: Blog) => {
    this.blogService.deleteBlog(blog.id).subscribe();
    window.location.reload();
  }
}
