import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/books/services/books.service';
import { Book } from 'src/app/books/model/book';
import { MatDatepickerModule } from '@angular/material/datepicker';



@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.scss'],
})
export class BooksFormComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: BooksService,
    private snackBar: MatSnackBar,
    private location: Location,
    private route: ActivatedRoute,
    private picker: MatDatepickerModule
  ) {
    this.form = this.formBuilder.group({
      title: [''],
      subtitle: [''],
      image: [''],
      author: [''],
      description: [''],
      published: [''],
    });
  }

  ngOnInit(): void {
    const book: Book = this.route.snapshot.data['book'];
    this.form.setValue({
      title: book.title,
      subtitle: book.subtitle,
      image: book.image,
      author: book.author,
      description: book.description,
      published: book.published,
    });
    console.log(book);
  }

  onSubmit() {
    this.service.save(this.form.value).subscribe(
      (result) => this.onSuccess(),
      (error) => this.onError()
    );
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Book successfully saved!', '', { duration: 4000 });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('Error saving book!', '', { duration: 4000 });
  }
}
