import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  serverUrl = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

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

  getAllBookss() {
    return this.http.get(`${this.serverUrl}/books`).pipe(
      tap((data) => data)
    )
  }

  getSingleBook(id: number) {
    return this.http.get(`${this.serverUrl}/books/${id}`).pipe(
      tap((data) => data)
    )
  }

  createBook(book: Book) {
    return this.http.post(`${this.serverUrl}/books`, book)
    .pipe(
      tap((data) => {
        console.log('Created', data)
      })
    )
  }

  updateBook(book: Book, id: number) {
    return this.http.put(`${this.serverUrl}/books/${id}`, book).pipe(
      tap((data) => {
        console.log('updating', data);
      })
    );
  }

  deleteBook(id: number) {
    console.log('delete user ', id);
    return this.http.delete(`${this.serverUrl}/books/${id}`).pipe(
      tap((x) => {
        console.log('after delete', x);
      })
    );
  }
}
