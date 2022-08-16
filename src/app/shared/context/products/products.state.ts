import { Injectable,  } from '@angular/core';
import { Action, State, StateContext, Selector, Select } from '@ngxs/store';
import { from, tap, catchError } from 'rxjs';
import { SanityService } from 'src/app/shared/services/sanity/sanity.service';
import { Product } from './product.model';

import { Observable } from 'rxjs';
import { GeneralState } from '../general/general.state';

import {
  FectchProducts,
  FectchHomeProductsSuccess,
  FectchPageProductSuccess,
  FectchProductsFailure,
  FectchProductsSuccess,
} from './products.actions';

interface ProductsStateModel {
  products: Product[];
  homeProducts: Product[];
  pageProduct: Product | undefined;
  status: 'pending' | 'loading' | 'success' | 'failure';
  error: '' | null;
}

@State<ProductsStateModel>({
  name: 'products',
  defaults: {
    pageProduct: undefined,
    homeProducts: [],
    products: [],
    status: 'pending',
    error: null,
  },
})
@Injectable()
export class ProductsState  {
  constructor(private sanity: SanityService) {
    this.lang$.subscribe((lang:string) => {
      this.lang = lang
    })
  }
  lang = "" 

  @Select(GeneralState.getLang) lang$:Observable<string> 



  @Selector()
  static getProducts(state: ProductsStateModel) {
    return state.products;
  }

  @Selector()
  static getHomeProducts(state: ProductsStateModel) {
    return state.homeProducts;
  }

  @Selector()
  static getPageProduct(state: ProductsStateModel) {
    return state.pageProduct;
    
  }

  @Action(FectchProducts)
  fectchProducts(
    ctx: StateContext<ProductsStateModel>,
    { page, slug }: FectchProducts
  ) {
    // Call the fetch products method and cancel if problem

    let expression = '';

    switch (page) {
      case 'home':
        expression = `_type == "product" && showOnHomePage == true`;
        break;
      case 'product':
        expression = `_type == "product" && slug.current == "${slug}"`;
        break;
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
          bulletPoints,
          shortDescription{
            ${this.lang}[]{
              children[]{
                text
              },
              listItem
            }
          }, 
          body
        }`
      )
    ).pipe(
      // Take the returned value and return a new success action containing the products
      tap((payload) => {
        switch (page) {
          case 'home':
            ctx.dispatch(new FectchHomeProductsSuccess(payload));
            break;
          case 'product':
            ctx.dispatch(new FectchPageProductSuccess(payload));
            break;
          default:
            ctx.dispatch(new FectchProductsSuccess(payload));
            break;
        }
      }),
      // Or... if it errors return a new failure action containing the error
      catchError((error) => ctx.dispatch(new FectchProductsFailure(error)))
    );
  }

  // Fetch all products
  @Action(FectchProductsSuccess)
  fectchProductsSuccess(
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

  // Fetch Home products
  @Action(FectchHomeProductsSuccess)
  fectchProductSuccess(
    ctx: StateContext<ProductsStateModel>,
    { homeProducts }: FectchHomeProductsSuccess
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      homeProducts: homeProducts,
      status: 'success',
      error: null,
    });
  }

  // Fetch Page product
  @Action(FectchPageProductSuccess)
  FectchPageProductSuccess(
    ctx: StateContext<ProductsStateModel>,
    { pageProduct }: FectchPageProductSuccess
  ) {
    const state = ctx.getState();
    console.log(pageProduct)
    ctx.setState({
      ...state,
      pageProduct: pageProduct? pageProduct[0] : undefined,
      status: 'success',
      error: null,
    });
  }

  @Action(FectchProductsFailure)
  fectchProductsFailure(
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
