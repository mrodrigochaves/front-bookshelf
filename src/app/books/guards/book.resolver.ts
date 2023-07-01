import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Book } from '../model/book';
import { Observable, of } from 'rxjs';
import { BooksService } from '../services/books.service';

@Injectable({
  providedIn: 'root'
})
export class BookResolver {

  constructor(private service: BooksService) {}

  resolve = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Book> => {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ _id: '', title: '', subtitle: '', image: '', author: '', description: '', published: new Date() });
  }
}
