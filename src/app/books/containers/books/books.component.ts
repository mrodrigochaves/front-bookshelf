import { Component, OnInit } from '@angular/core';
import { DatePipe, NgFor, CommonModule } from '@angular/common';
import { BooksService } from '../../services/books.service';
import { Observable, catchError, of } from 'rxjs';
import { AppMaterialModule } from 'src/app/shared/app-material/app-material.module';

import { Book } from '../../model/book';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  standalone: true,
  imports: [NgFor, DatePipe, AppMaterialModule, CommonModule],
})
export class BooksComponent implements OnInit {
  books$!: Observable<Book[]>;

  filteredBooks: Book[] = [];
  displayedColumns = [
    'title',
    'subtitle',
    'author',
    'description',
    'published',
  ];
  searchText = '';

  constructor(
    private booksService: BooksService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.books$ = this.booksService.listBooks().pipe(
      catchError(() => {
        this.onError('Error loading books!');
        return of([]);
      })
    );
  }

  ngOnInit() {
    this.filterBooks();
  }

  filterBooks() {
    this.books$.subscribe((books) => {
      if (!this.searchText) {
        this.filteredBooks = books;
      } else {
        this.filteredBooks = books.filter((book) =>
          book.title.toLowerCase().includes(this.searchText.toLowerCase())
        );
      }
    });
  }

  onError(erroMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: erroMsg,
    });
  }

  onAdd() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }

  onEdit(book: Book) {
    this.router.navigate(['edit', book._id], { relativeTo: this.route });
  }
}
