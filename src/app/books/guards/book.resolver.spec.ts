import { TestBed } from '@angular/core/testing';
import { BookResolver } from './book.resolver';
import { BooksService } from '../services/books.service';

describe('BookResolver', () => {
  let bookResolver: BookResolver;
  let booksServiceSpy: jasmine.SpyObj<BooksService>;

  beforeEach(() => {
    const booksServiceSpyObj = jasmine.createSpyObj('BooksService', ['loadById']);

    TestBed.configureTestingModule({
      providers: [
        BookResolver,
        { provide: BooksService, useValue: booksServiceSpyObj }
      ]
    });

    bookResolver = TestBed.inject(BookResolver);
    booksServiceSpy = TestBed.inject(BooksService) as jasmine.SpyObj<BooksService>;
  });

  it('should be created', () => {
    expect(bookResolver).toBeTruthy();
  });
});
