import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent {
  bookForm: FormGroup;
  authorsArray: FormArray;

  book: Book = {
    id: 0,
    name: '',
    isbn: '',
    authors: ['']
  }

  constructor(private fb: FormBuilder, private books: BookService) {
    this.bookForm = fb.group({
      name: [''],
      isbn: [''],
      authors: fb.array([]),
    })
    this.authorsArray = this.bookForm.controls['authors'] as FormArray
  }

  addAuthor = () => {
    this.authorsArray.push(new FormControl());
  }

  deleteAuthor = (i: number) => {
    this.authorsArray.removeAt(i);
  }

  onSubmit = () => {
    if (this.bookForm.valid) {
        this.book.id = this.books.books.length + 1;
        this.book.name = this.bookForm.value.name;
        this.book.isbn = this.bookForm.value.isbn;
        this.book.authors = this.bookForm.value.authors;
        this.books.books.push(this.book)
        this.bookForm.reset();
    }
  }
}
