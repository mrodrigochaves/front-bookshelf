import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksComponent } from './containers/books/books.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';
import { BooksFormComponent } from './containers/books-form/books-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    BooksFormComponent
  ],
  imports: [CommonModule, BooksRoutingModule, AppMaterialModule, MatFormFieldModule],
})
export class BooksModule {}
export { BooksComponent };
