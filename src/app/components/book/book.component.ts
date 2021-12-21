import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Book } from '../../types/books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
})
export class BookComponent implements OnInit {
  books: Book[] = this.booksService.getAllBooks();
  book: Book | undefined;
  constructor(
    private route: ActivatedRoute,
    private booksService: BooksService
  ) {}

  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const bookIdFromRoute = Number(routeParams.get('bookId'));

    this.book = this.books.find(
      (book) => Number(book.isbn13) === bookIdFromRoute
    );
  }

  addToCart(book: Book) {
    this.booksService.addToCart(book);
    console.log('book added');
  }
}
