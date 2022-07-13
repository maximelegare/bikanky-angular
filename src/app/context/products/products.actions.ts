import { createAction, props } from '@ngrx/store';
import { Product } from './products.model';


export const fetch_products_action = "[Products List] Fetch Products"

export const fetchProducts = createAction(
    fetch_products_action,
    props<{products: ReadonlyArray<Product>}>
)

