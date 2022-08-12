import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { catchError, EMPTY, map, mergeMap, of } from "rxjs";

import { ProductsService } from "../services/products.service";

@Injectable()
export class ProductEffects {

   loadProducts$ = createEffect(() => this.actions$.pipe(
      ofType('[Products Page] Load Products'),
      mergeMap(() => this.productsService.getProducts().pipe(
         map(products => ({ type: '[Products API] Products Loaded', payload: products })),
         catchError(() => of({ type: '[Products API] Products Loaded Error'}))
      ))
   ))

   constructor(
      private actions$: Actions,
      private productsService: ProductsService
   ) {}
}