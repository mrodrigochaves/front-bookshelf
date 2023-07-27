import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksComponent } from './containers/books/books.component';
import { BooksFormComponent } from './containers/books-form/books-form.component';
import { BookResolver } from './guards/book.resolver';


const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'new', component: BooksFormComponent, resolve: { book: BookResolver } },
  { path: 'edit/:id', component: BooksFormComponent, resolve: { book: BookResolver } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
