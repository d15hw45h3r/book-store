import { Component, OnInit } from '@angular/core';
import booksJSON from '../../books.json';
import { Book } from '../../types/books';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent implements OnInit {
  searchText: string = '';
  constructor(private booksService: BooksService) {}

  books: Book[] = this.booksService.getAllBooks();

  addToCart(book: Book) {
    this.booksService.addToCart(book);
  }

  sortColumns(column: string) {
    const books = [...this.books];
    if (column === 'TITLE') {
      books.sort((a, b) => a.title.localeCompare(b.title));
    } else if (column === 'PRICE') {
      books.sort((a, b) => a.price.localeCompare(b.price));
    }
    this.books = books;
  }

  ngOnInit(): void {
    localStorage.setItem('books', JSON.stringify(booksJSON.books));
  }
}
