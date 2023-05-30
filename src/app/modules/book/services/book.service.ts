import { Injectable } from '@angular/core';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  books: Book[] = [
    {
      id: 1,
      name: 'The Boy, the Mole, the Fox and the Horse',
      authors: ['Charlie Mackesy'],
      isbn: '9781234567897'
    },
    {
      id: 2,
      name: 'Don Quixote',
      authors: ['Miguel de Cervantes'],
      isbn: '9123126343897'
    },
    {
      id: 3,
      name: 'Life of Pi',
      authors: ['Charlie Mackesy'],
      isbn: '9123126323123'
    },
  ];

  getAllBooks = () => {
    return this.books;
  }
}
