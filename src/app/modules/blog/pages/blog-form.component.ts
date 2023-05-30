import { Component } from '@angular/core';
import { Blog } from '../models/blog';
import { FormControl, FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogService } from '../services/blog.service';

@Component({
  selector: 'app-blog-form',
  templateUrl: './blog-form.component.html',
  styleUrls: ['./blog-form.component.scss']
})
export class BlogFormComponent {
    blogForm: FormGroup;
    commentsArray: FormArray;
    blog: Blog = {
      id: 0,
      title: '',
      description: '',
      author: '',
      comments: ['']
    }
     

    
    constructor(private fb: FormBuilder, private blogs: BlogService) {

      this.blogForm = fb.group({
        title: ['', [Validators.required]],
        description: ['', [Validators.required]],
        author: ['', [Validators.required]],
        comment: fb.array([], [Validators.required]),
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
        this.blog.id = this.blogs.blogs.length + 1;
        this.blog.title = this.blogForm.value.title;
        this.blog.description = this.blogForm.value.description;
        this.blog.author = this.blogForm.value.author;
        this.blog.comments = this.blogForm.value.comment;
        this.blogs.blogs.push(this.blog);
        this.blogForm.reset();
      }
      
    }
}
