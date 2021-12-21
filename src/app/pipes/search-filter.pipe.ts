import { Pipe, PipeTransform } from '@angular/core';
import { Book } from '../types/books';

@Pipe({
  name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
  transform(books: Book[], searchText: string) {
    return books.filter(
      (book) =>
        book.title.toLowerCase().indexOf(searchText.toLowerCase()) !== -1 ||
        book.subtitle.toLowerCase().indexOf(searchText.toLowerCase()) !== -1
    );
  }
}
