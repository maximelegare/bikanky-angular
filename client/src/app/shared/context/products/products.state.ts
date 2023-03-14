import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector, Select } from '@ngxs/store';
import { from, tap, catchError } from 'rxjs';
import { SanityService } from 'src/app/shared/services/sanity/sanity.service';
import { Product, ProductVariant } from './product.model';

import { Observable } from 'rxjs';
import { GeneralState } from '../general/general.state';

import {
  FectchProducts,
  FectchHomeProductsSuccess,
  FectchPageProductSuccess,
  FectchProductsFailure,
  FectchProductsSuccess,
  FectchStarProductsSuccess,
  FetchAllMergedProductsSuccess,
  FilterCurrentProductVariant,
} from './products.actions';

interface ProductsStateModel {
  products: Product[];
  allMergedProducts: any[];
  homeProducts: Product[];
  pageProduct: Product | undefined;
  currentVariant: any;
  starProducts: Product[];
  starOfTheSeasonProduct: Product | undefined;
  status: 'pending' | 'loading' | 'success' | 'failure';
  error: string | null;
}

@State<ProductsStateModel>({
  name: 'products',
  defaults: {
    pageProduct: undefined,
    currentVariant: undefined,
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
  static getCurrentVariant(state: ProductsStateModel) {
    return state.currentVariant;
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
        expression = `{
          'homeProducts': *[_type == "productVariant" && isActive && showOnHomePage && !starOfTheSeason]{
            mainProductTitle,
            mainImage{"imageUrl":asset->url},
            images[]{"imageUrl": asset->url},
            price,
            variantTitle,
            lengthType->{title},
            options,
            showOnHomePage,
            isActive,
            limitedEdition,
            star,
            starOfTheSeason,
            "slug": [*[_type == "product" && references(^._id)][0].slug.current, sku],
            "sku":sku.current,
            _id
          },
          'stars': *[_type == "productVariant" && isActive && (star || starOfTheSeason)]{
            mainProductTitle,
            mainImage{"imageUrl":asset->url},
            images[]{"imageUrl": asset->url},
            price,
            variantTitle,
            lengthType->{title},
            options,
            showOnHomePage,
            limitedEdition,
            isActive,
            star,
            starOfTheSeason,
            "slug": [*[_type == "product" && references(^._id)][0].slug.current, sku.current],
            "sku":sku.current,
            _id
          }
        }
        `;
        break;
      case 'product':
        expression = `*[_type == "product"  && slug.current == '${slug}']{
          _id,
          body,
          mainProductTitle,
          "slug":[slug.current],
          origin{ ${this.lang}[]},
          variants[]->{
            _id,
            isActive,
            limitedEdition,
            mainImage{"imageUrl": asset->url},
            images[]{"imageUrl": asset->url},
            mainProductTitle,
            options,
            price,
            showOnHomePage,
            sku,
            star,
            starOfTheSeason,
            lengthType->{title},
            tags,
            "sku":sku.current,
            "slug": [*[_type == "product" && references(^._id)][0].slug.current, sku.current],
          }
        }`;
        break;
      case 'all-products':
        expression = `
        *[_type == "productVariant" && isActive]{
          mainProductTitle,
          mainImage{"imageUrl":asset->url},
          images[]{"imageUrl": asset->url},
          price,
          variantTitle,
          lengthType->{title},
          options,
          showOnHomePage,
          limitedEdition,
          isActive,
          star,
          starOfTheSeason,
          "sku":sku.current,
          "slug": [*[_type == "product" && references(^._id)][0].slug.current, sku.current],
          _id
        }`;
        break;
      default:
        expression = `_type == "product" && isActive`;
        break;
    }

    return from(this.sanity.fetchQuerry(expression)).pipe(
      // Take the returned value and return a new success action containing the products
      tap((payload) => {
        console.log(payload)
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
          case 'all-products':
            ctx.dispatch(new FetchAllMergedProductsSuccess(payload));
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

  // Fetch products
  @Action(FectchProductsSuccess)
  fectchProductsSuccess(
    ctx: StateContext<ProductsStateModel>,
    { products }: FectchProductsSuccess
  ) {
    if (products) {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        products: products,
        status: 'success',
        error: null,
      });

      ctx.dispatch(new FetchAllMergedProductsSuccess(products));
    }
  }

  // Merges product and variants together in a single array
  @Action(FetchAllMergedProductsSuccess)
  FetchAllMergedProductsSuccess(
    ctx: StateContext<ProductsStateModel>,
    { products }: FetchAllMergedProductsSuccess
  ) {
    if (products) {
      const state = ctx.getState();

      ctx.setState({
        ...state,
        allMergedProducts: products,
        status: 'success',
        error: null,
      });
    }
  }

  // Fetch Home products
  @Action(FectchHomeProductsSuccess)
  fectchProductSuccess(
    ctx: StateContext<ProductsStateModel>,
    { homeData }: FectchHomeProductsSuccess
  ) {
    if (homeData) {
      const state = ctx.getState();
      const starOfTheSeasonProduct = homeData?.stars.filter(
        (product: ProductVariant) => product.starOfTheSeason === true
      );
      const starProductsFilter = homeData?.stars.filter(
        (product: ProductVariant) => product.starOfTheSeason !== true
      );

      ctx.setState({
        ...state,
        homeProducts: homeData ? homeData.homeProducts : undefined,
        starProducts: starProductsFilter,
        starOfTheSeasonProduct: starOfTheSeasonProduct[0],
        status: 'success',
        error: null,
      });
    }
  }

  // Fetch Page product
  @Action(FectchPageProductSuccess)
  FectchPageProductSuccess(
    ctx: StateContext<ProductsStateModel>,
    { pageProduct }: FectchPageProductSuccess
  ) {
    if (pageProduct) {
      const state = ctx.getState();
      ctx.setState({
        ...state,
        pageProduct: pageProduct[0],
        status: 'success',
        error: null,
      });
    }
  }

  // Filter current product variant
  @Action(FilterCurrentProductVariant)
  FilterCurrentProductVariant(
    ctx: StateContext<ProductsStateModel>,
    { productVariants, sku }: FilterCurrentProductVariant
  ) {
    if (productVariants) {
      const state = ctx.getState();

      const currentVariant = productVariants
        .filter((variant) => variant.sku === sku)
        .map((variant) => {
          return {
            ...variant,
            body: state.pageProduct?.body,
            mainProductTitle: state.pageProduct?.mainProductTitle,
          };
        })[0];


      ctx.setState({
        ...state,
        currentVariant: currentVariant,
        status: 'success',
        error: null,
      });
    }
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
      error: 'something went wrong!',
    });
  }
}
