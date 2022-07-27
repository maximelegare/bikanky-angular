import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { from, tap, catchError } from 'rxjs';
import { SanityService } from 'src/app/shared/services/sanity/sanity.service';
import { Product } from './product.model';

import {
  FectchAllProducts,
  FectchAllProductsFailure,
  FectchAllProductsSuccess,
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
    
    return state.products.filter((product) => product.showOnHomePage)
  }






  @Action(FectchAllProducts)
  fectchAllProducts(ctx: StateContext<ProductsStateModel>) {
    // Call the fetch products method and cancel if problem
    return from(
      this.sanity.fetchQuerry(
        `*[_type == "product"]{
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
        ctx.dispatch(new FectchAllProductsSuccess(products));
      }),
      // Or... if it errors return a new failure action containing the error
      catchError((error) => ctx.dispatch(new FectchAllProductsFailure(error)))
    );
  }

  @Action(FectchAllProductsSuccess)
  fectchAllProductsSuccess(
    ctx: StateContext<ProductsStateModel>,
    { products }: FectchAllProductsSuccess
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      products: products,
      status: 'success',
      error: null,
    });
  }

  @Action(FectchAllProductsFailure)
  fectchAllProductsFailure(
    ctx: StateContext<ProductsStateModel>,
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