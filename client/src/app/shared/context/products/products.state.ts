import { Injectable } from '@angular/core';
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
  FectchStarProductsSuccess,
  MergeDefaultAndVariants,
} from './products.actions';

interface ProductsStateModel {
  products: Product[];
  allMergedProducts: any[];
  homeProducts: Product[];
  pageProduct: Product | undefined;
  starProducts: Product[];
  starOfTheSeasonProduct: Product | undefined;
  status: 'pending' | 'loading' | 'success' | 'failure';
  error: '' | null;
}

@State<ProductsStateModel>({
  name: 'products',
  defaults: {
    pageProduct: undefined,
    starOfTheSeasonProduct: undefined,
    homeProducts: [],
    products: [],
    allMergedProducts: [],
    starProducts: [],
    status: 'pending',
    error: null,
  },
})
@Injectable()
export class ProductsState {
  constructor(private sanity: SanityService) {
    this.lang$.subscribe((lang: string) => {
      this.lang = lang;
    });
  }
  lang = '';

  @Select(GeneralState.getLang) lang$: Observable<string>;

  @Selector()
  static getProducts(state: ProductsStateModel) {
    return state.products;
  }
  @Selector()
  static getAllMergedProducts(state: ProductsStateModel) {
    return state.allMergedProducts;
  }

  @Selector()
  static getHomeProducts(state: ProductsStateModel) {
    return state.homeProducts;
  }

  @Selector()
  static getPageProduct(state: ProductsStateModel) {
    return state.pageProduct;
  }

  @Selector()
  static getStarProducts(state: ProductsStateModel) {
    return state.starProducts;
  }
  @Selector()
  static getStarOfTheSeasonProduct(state: ProductsStateModel) {
    return state.starOfTheSeasonProduct;
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
        expression = `_type == "product" && isActive == true && showOnHomePage == true`;
        break;
      case 'stars':
        expression = `_type == "product" && isActive && (star || starOfTheSeason)`;
        break;
      case 'product':
        expression = `_type == "product" && isActive == true && slug.current == "${slug}"`;
        break;
      default:
        expression = `_type == "product" && isActive`;
        break;
    }
    return from(
      this.sanity.fetchQuerry(
        `*[${expression}]{
          _id,
          
          showOnHomePage,  
          star,
          starOfTheSeason,
          isActive,  
          title,
          slug,
          defaultProductVariant{
            images[]{"imageUrl": asset->url},
            price,
            variantTitle,
            lengthType->{title},
            options, 
          },
          variants[]{
            images[]{"imageUrl": asset->url},
            price,
            variantTitle,
            lengthType->{title},
            options, 
          },
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
          case 'stars':
            ctx.dispatch(new FectchStarProductsSuccess(payload));
            break;
          case 'starOfTheSeason':
            ctx.dispatch(new FectchStarProductsSuccess(payload));
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

    ctx.dispatch(new MergeDefaultAndVariants(products));
  }

  // Merges product and variants together in a single array
  @Action(MergeDefaultAndVariants)
  mergeDefaultAndVariants(
    ctx: StateContext<ProductsStateModel>,
    { products }: MergeDefaultAndVariants
  ) {
    const state = ctx.getState();
    let mergedProducts: any = [];

    let allProducts = products.map((product) => {
      if (product.variants)
        return [...mergedProducts, { ...product }, ...product.variants];
      else return [...products, product];
    });
    mergedProducts = allProducts.flat(1);

    ctx.setState({
      ...state,
      allMergedProducts:mergedProducts,
      status: 'success',
      error: null,
    });
  }

  // Fetch star products
  @Action(FectchStarProductsSuccess)
  FectchStarProductsSuccess(
    ctx: StateContext<ProductsStateModel>,
    { starProducts }: FectchStarProductsSuccess
  ) {
    const state = ctx.getState();

    const starOfTheSeasonProduct = starProducts.filter(
      (product) => product.starOfTheSeason === true
    );
    const starProductsFilter = starProducts.filter(
      (product) => product.starOfTheSeason !== true
    );

    ctx.setState({
      ...state,
      starProducts: starProductsFilter,
      starOfTheSeasonProduct: starOfTheSeasonProduct[0],
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
    ctx.setState({
      ...state,
      pageProduct: pageProduct ? pageProduct[0] : undefined,
      status: 'success',
      error: null,
    });
  }

  // Fetch Page product

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
