import { Component, Input } from '@angular/core';
import { Blog } from '../models/blog';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogService } from '../services/blog.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {
  //@Input('editBlog') editBlog: Blog | undefined;

    blogForm: FormGroup;
    commentsArray: FormArray;
    blog: Blog = {
      id: 0,
      title: '',
      description: '',
      author: '',
      comments: ['']
    }
    

    
    constructor(private fb: FormBuilder, private blogs: BlogService, 
      private route: ActivatedRoute,
      private router: Router) {

      this.blogForm = fb.group({
        title: [this.route.snapshot.queryParams['title'] || '', [Validators.required]],
        description: [this.route.snapshot.queryParams['description'] || '', [Validators.required]],
        author: [this.route.snapshot.queryParams['author'] || '', [Validators.required]],
        comment: fb.array(this.route.snapshot.queryParams['comments'] || [] , [Validators.required]),
      })
      this.commentsArray = this.blogForm.controls['comment'] as FormArray
    }

    addComment = () => {
      this.commentsArray.push(new FormControl());
    }

    deleteComment = (i: number) => {
      this.commentsArray.removeAt(i);
    }
    onSubmit = () => {
      if (this.blogForm.valid) {
        if (this.route.snapshot.queryParams['id']) {
          this.blogs.updateBlog(this.blogForm.value, this.route.snapshot.queryParams['id']).subscribe();
        } else {
          this.blog.title = this.blogForm.value.title;
          this.blog.description = this.blogForm.value.description;
          this.blog.author = this.blogForm.value.author;
          this.blog.comments = this.blogForm.value.comment;
          this.blogs.createBlogs(this.blog).subscribe();
          //this.blogs.blogs.push(this.blog);
        }
        
        this.blogForm.reset();
        this.router.navigate(['blog'])
      }
      
    }
}
