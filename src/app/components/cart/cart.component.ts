import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/types/books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  books: Book[] = this.booksService.getAddedBooks();
  total: string | 0 =
    this.books.length > 0
      ? this.books
          .map((book) => Number(book.price.split('$').filter((a) => a)))
          .reduce((a, b) => a + b)
          .toFixed(2)
      : 0;

  constructor(private booksService: BooksService) {}

  ngOnInit(): void {}
}
