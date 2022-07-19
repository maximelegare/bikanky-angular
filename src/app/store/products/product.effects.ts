import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadProducts, loadProductsSuccess, loadProductsFailure } from './products.actions';
import { SanityService } from 'src/app/services/sanity/sanity.service';
import { of, from } from 'rxjs';
import { switchMap, map, catchError, tap } from 'rxjs/operators';


@Injectable()
export class ProductEffect {
  constructor(
    private actions$: Actions,
    private sanity: SanityService
  ) {}

  // Run this code when a loadTodos action is dispatched
  loadProducts$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loadProducts),
      switchMap(() =>
        // Call the getTodos method, convert it to an observable
        from(this.sanity.fetchProducts()).pipe(
          // Take the returned value and return a new success action containing the todos
          map((products) =>  {
            return loadProductsSuccess({ products: products })}),
          
          // Or... if it errors return a new failure action containing the error
          catchError((error) => of(loadProductsFailure({ error })))
        )
      )
    )}
  );
}