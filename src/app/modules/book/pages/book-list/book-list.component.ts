import { Component } from '@angular/core';
import { Book } from '../../models/book';
import { BookService } from '../../services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  constructor (private bookService: BookService) {}

  books: Book[] = this.bookService.getAllBooks();
  
  edit = (id: number) => {
    console.log(`edit: ${id}`)
  };
}
