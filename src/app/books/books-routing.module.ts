import { NgModule, inject } from '@angular/core';
import { RouterModule, Routes, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { BooksComponent } from './containers/books/books.component';
import { BooksFormComponent } from './containers/books-form/books-form.component';
import { BookResolver } from './guards/book.resolver';

function resolveBook(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  const bookResolver = inject(BookResolver) ;
  return bookResolver.resolve(route, state);
}

const routes: Routes = [
  { path: '', component: BooksComponent },
  { path: 'new', component: BooksFormComponent, resolve: { book: resolveBook } },
  { path: 'edit/:id', component: BooksFormComponent, resolve: { book: resolveBook } }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BooksRoutingModule {}
