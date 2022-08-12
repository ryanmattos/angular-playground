import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product-model';
import URL from '../utils/http';


@Injectable({
  providedIn: 'root'
})
export class ProductsService {
   url(path: string) {
      return URL.resolver(path)
   }

   constructor(
      private httpClient: HttpClient
   ) {}

   getProducts(): Observable<Array<Product>> {
      return this.httpClient.get<Array<Product>>( this.url('/products') )
   }

}
