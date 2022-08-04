import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { from, tap, catchError } from 'rxjs';
import { SanityService } from 'src/app/shared/services/sanity/sanity.service';
import { Product } from './product.model';

import {
  FectchProducts,
  FectchProductsFailure,
  FectchProductsSuccess,
} from './products.actions';

interface ProductsStateModel {
  products: Product[];
  status: 'pending' | 'loading' | 'success' | 'failure';
  error: '' | null;
}

@State<ProductsStateModel>({
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
  static getProducts(state: ProductsStateModel) {
    return state.products;
  }

  @Selector()
  static getHomeProducts(state: ProductsStateModel) {
    return state.products;
  }

  @Action(FectchProducts)
  fectchProducts(
    ctx: StateContext<ProductsStateModel>,
    { page }: FectchProducts
  ) {
    // Call the fetch products method and cancel if problem

    let expression = "";

    switch (page) {
      case 'home': {
        expression = `_type == "product" && showOnHomePage == true`;
        break;
      }
      default:
        expression = `_type == "product"`;
        break;
    }

    return from(
      this.sanity.fetchQuerry(
        `*[${expression}]{
          _id,
          showOnHomePage,    
          title,
          slug,
          defaultProductVariant{
            images[]{"imageUrl": asset->url},
            price,
            variantTitle
          },
          variants,
          tags,
          bulletPoints
        }`
      )
    ).pipe(
      // Take the returned value and return a new success action containing the products
      tap((products) => {
        ctx.dispatch(new FectchProductsSuccess(products));
      }),
      // Or... if it errors return a new failure action containing the error
      catchError((error) => ctx.dispatch(new FectchProductsFailure(error)))
    );
  }

  @Action(FectchProductsSuccess)
  fectchHomeProductsSuccess(
    ctx: StateContext<ProductsStateModel>,
    { products }: FectchProductsSuccess
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      products: products,
      status: 'success',
      error: null,
    });
  }

  @Action(FectchProductsFailure)
  fectchHomeProductsFailure(
    ctx: StateContext<ProductsStateModel>,
    action: FectchProductsFailure
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      status: 'failure',
      error: null,
    });
  }
}
