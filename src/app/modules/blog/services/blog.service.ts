import { Injectable } from '@angular/core';
import { Blog } from '../models/blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor() { }

  blogs: Blog[] = [
    {
      id: 1,
      title: 'Poison Tree',
      description: 'I was angry with my friend; I told my wrath, my wrath did end. I was angry with my foe I told it not, my wrath did grow.',
      author: 'William Blake',
      comments: ['Used by Peaky Blinders']
    },
    {
      id: 2,
      title: 'The Boy, the Mole, the Fox and the Horse',
      description: "Asking for help isn't giving up,It's refusing to give up",
      author: ' Charlie Mackesy',
      comments: ['Quotes']
    },
  ];

  getBlogs = () => {
    return this.blogs;
  }
}
