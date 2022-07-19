import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { switchMap, from, map, catchError } from 'rxjs';
import { SanityService } from 'src/app/services/sanity/sanity.service';
import { Products, Product } from './product.model';

import {
  FectchAllProducts,
  FectchAllProductsFailure,
  FectchAllProductsSuccess,
} from './products.actions';

@State<Products>({
  name: 'products',
  defaults: {
    products: [],
    status: 'pending',
    error: null,
  },
})
@Injectable()

export class ProductsState {
  constructor(private sanity: SanityService) {}

  @Selector()
  static getProducts(state: Products) {
    return state.status;
  }

  @Action(FectchAllProducts)
  fectchAllProducts(ctx: StateContext<Products>) {
    // Call the fetch products method and cancel if problem
    return from(this.sanity.fetchProducts()).pipe(
      // Take the returned value and return a new success action containing the products
      map((products: Product[]) => {
        console.log(products);
        ctx.dispatch(new FectchAllProductsSuccess(products));
      }),
      // Or... if it errors return a new failure action containing the error
      catchError((error) => ctx.dispatch(new FectchAllProductsFailure(error)))
    );
  }

  @Action(FectchAllProductsSuccess)
  fectchAllProductsSuccess(
    ctx: StateContext<Products>,
    action: FectchAllProductsSuccess
  ) {
    const state = ctx.getState();

    ctx.setState({
      products: action.products,
      status: 'success',
      error: null,
    });
  }

  @Action(FectchAllProductsFailure)
  fectchAllProductsFailure(
    ctx: StateContext<Products>,
    action: FectchAllProductsFailure
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      status: 'failure',
      error: null,
    });
  }
}
