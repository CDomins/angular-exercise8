import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { BookService } from '../services/book.service';
import { Book } from '../models/book';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private fb: FormBuilder, private books: BookService,
    private route: ActivatedRoute, private router: Router) {

    this.bookForm = fb.group({
      name: this.route.snapshot.queryParams['name'] || '',
      isbn: this.route.snapshot.queryParams['isbn'] || '',
      authors: fb.array(this.route.snapshot.queryParams['authors'] || []),
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
        if (this.route.snapshot.queryParams['id']) {
          this.books.updateBook(this.bookForm.value, this.route.snapshot.queryParams['id'])
          .subscribe();
        } else {
          this.books.createBook(this.bookForm.value).subscribe();
        }
        this.router.navigate(['book'])
    }
  }
}
