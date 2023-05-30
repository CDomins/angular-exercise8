import { Component, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit{
  constructor (private bookService: BookService, private router: Router) {}
  sub: Subscription | undefined

  books: any = [];

  ngOnInit(): void {
    this.bookService.getAllBookss().subscribe((data) => {
        this.books = data
    })
  }
  
  editBook = (book: Book) => {
    this.bookService.getSingleBook(book.id).subscribe((data) => {
      console.log(data)
      this.router.navigate([`${this.router.url}/form`], {queryParams: data})
    })
  };

  delete = (book: Book) => {
    this.bookService.deleteBook(book.id).subscribe();
    window.location.reload();
  }
}
