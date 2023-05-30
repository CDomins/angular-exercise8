import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from '../../models/book';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.scss']
})
export class BookItemComponent {
  @Input('books') book: Book | undefined;
  @Output() editEmitter: EventEmitter<Book> = new EventEmitter();
  @Output() deleteEmitter: EventEmitter<Book> = new EventEmitter();

  edit = (book: Book) => {
    this.editEmitter.emit(book);
  };

  delete = (book: Book) => {
    this.deleteEmitter.emit(book);
  }
}
