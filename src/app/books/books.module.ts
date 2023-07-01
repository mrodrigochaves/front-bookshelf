import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './containers/books/books.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { BooksFormComponent } from './containers/books-form/books-form.component';


@NgModule({
  declarations: [
    BooksFormComponent
  ],
  imports: [CommonModule, BooksRoutingModule, AppMaterialModule],
})
export class BooksModule {}
export { BooksComponent };
