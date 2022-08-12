import { counterReducer } from './reducers/counter.reducer';
import { registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import ptbrex from '@angular/common/locales/extra/pt';
import ptbr from '@angular/common/locales/pt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/product/product.component';
import { StoreModule } from '@ngrx/store';
import { MyCounterComponent } from './components/my-counter/my-counter.component';
import { booksReducer } from './reducers/books.reducer';
import { collectionReducer } from './reducers/collection.reducer';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookCollectionComponent } from './components/book-collection/book-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';
registerLocaleData(ptbr, ptbrex)
@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    MyCounterComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    }, {}),
    HttpClientModule,
    EffectsModule.forRoot([
      ProductEffects
    ])
  ],
  providers: [
    { provide: LOCALE_ID,
    useValue: 'pt-BR'}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
