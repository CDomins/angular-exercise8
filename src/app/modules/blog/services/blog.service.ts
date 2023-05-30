import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  serverUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }
  // blogs: Blog[] = [
  //   {
  //     id: 1,
  //     title: 'Poison Tree',
  //     description: 'I was angry with my friend; I told my wrath, my wrath did end. I was angry with my foe I told it not, my wrath did grow.',
  //     author: 'William Blake',
  //     comments: ['Used by Peaky Blinders']
  //   },
  //   {
  //     id: 2,
  //     title: 'The Boy, the Mole, the Fox and the Horse',
  //     description: "Asking for help isn't giving up,It's refusing to give up",
  //     author: ' Charlie Mackesy',
  //     comments: ['Quotes']
  //   },
  // ];

  // getBlogs = () => {
  //   return this.blogs;
  // }


  getAllBlogs() {
    return this.http.get(`${this.serverUrl}/blogs`).pipe(
      tap((data) => data)
    )
  }

  getSingleBlog(id: number) {
    return this.http.get(`${this.serverUrl}/blogs/${id}`).pipe(
      tap((data) => data)
    )
  }

  createBlogs(blog: Blog) {
    return this.http.post(`${this.serverUrl}/blogs`, blog)
    .pipe(
      tap((data) => {
        console.log('Created', data)
      })
    )
  }

  updateBlog(blog: Blog, id: number) {
    return this.http.put(`${this.serverUrl}/blogs/${id}`, blog).pipe(
      tap((data) => {
        console.log('updating', data);
      })
    );
  }

  deleteBlog(id: number) {
    console.log('delete user ', id);
    return this.http.delete(`${this.serverUrl}/blogs/${id}`).pipe(
      tap((x) => {
        console.log('after delete', x);
      })
    );
  }
}
