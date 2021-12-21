import { Injectable } from '@angular/core';
import booksJSON from '../books.json';
import { Book } from '../types/books';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor() {}
  items: Book[] = booksJSON.books;

  getAddedBooks() {
    let items = localStorage.getItem('books');
    if (typeof items === 'string') {
      this.items = JSON.parse(items);
      return this.items.filter((book) => book.added === true);
    } else {
      return [];
    }
  }

  getAllBooks() {
    let items = localStorage.getItem('books');
    if (typeof items === 'string') {
      return JSON.parse(items);
    }
  }

  addToCart(book: Book) {
    book.added = true;
    let index = this.items.findIndex((x) => x.isbn13 === book.isbn13);
    this.items[index] = book;

    localStorage.setItem('books', JSON.stringify(this.items));
  }
}
