import { ProductsService } from './services/products.service';
import { Component, OnInit } from '@angular/core';
import { Product } from './models/product-model';
import { selectBookCollection, selectBooks } from './selectors/books.selectors';
import { Store } from '@ngrx/store';
import { BooksService } from './services/books.service';
import { addBook, removeBook, retrievedBookList } from './actions/books.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-playground';
  products: Array<Product> = [];
  books$ = this.store.select(selectBooks)
  bookCollection$ = this.store.select(selectBookCollection)

  constructor(
    private productsService: ProductsService,
    private booksService: BooksService,
    private store: Store
  ) {}

  ngOnInit(): void {
    this._getProducts();
    this._getBooks();
  }

  private _getProducts() {
    this.productsService.getProducts().subscribe(x => {
      this.products = x;
    })
  }

  private _getBooks() {
    this.booksService.getBooks().subscribe(books => {
      this.store.dispatch(retrievedBookList({books}))
    })
  }

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }))
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }))
  }
}
