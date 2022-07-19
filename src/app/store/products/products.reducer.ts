import { createReducer, on } from '@ngrx/store';
import { Product, ProductState } from 'src/app/store/products/product.model';
import * as ProductsActions from './products.actions';

import {
  loadProducts,
  loadProductsSuccess,
  loadProductsFailure,
} from './products.actions';

export const initialState: ProductState = {
  products: [],
  error: null,
  status: 'pending',
};

export const productsReducer = createReducer(
  initialState,
  on(loadProducts, (state) => ({ ...state, status: 'loading' })),
  on(loadProductsSuccess, (state, { products }) => ({
    ...state,
    products: products,
    error: null,
    status: 'success',
  })),
  on(loadProductsFailure, (state, { error }) => ({
    ...state,
    error: error,
    status: 'error',
  }))
);
