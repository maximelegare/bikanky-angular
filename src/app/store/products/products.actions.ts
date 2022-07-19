import { createAction, props } from '@ngrx/store';
import { Product } from 'src/app/store/products/product.model';

export const LOAD_PRODUCTS = '[PRODUCTS LIST] Load Products';
export const LOAD_PRODUCTS_SUCCESS = '[PRODUCTS LIST] Load Products Success';
export const LOAD_PRODUCTS_FAILURE = '[PRODUCTS LIST] Load Products Failure';

export const loadProducts = createAction(LOAD_PRODUCTS);

export const loadProductsSuccess = createAction(LOAD_PRODUCTS_SUCCESS, props<{products:Product[]}>());

export const loadProductsFailure = createAction(LOAD_PRODUCTS_FAILURE, props<{error:string}>());


