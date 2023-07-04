import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {

  private readonly API = 'http://localhost:8080/books';

  constructor( private httpClient: HttpClient) {}

  listBooks() {
    return this.httpClient.get<Book[]>(this.API)
    .pipe(
      first(),
      tap(books => console.log(books))
    );
  }

  loadById(id: string){
    return this.httpClient.get<Book>(`${this.API}/${id}`);
  }

  save(record: Partial<Book>){
  return this.httpClient.post<Book>(this.API, record).pipe(first());
  }
}
