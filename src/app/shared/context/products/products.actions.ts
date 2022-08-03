import { Product } from "./product.model";


export class FectchAllProducts {
  static readonly type = '[Home API] Fetch All Products';
}

export class FectchAllProductsSuccess {
  static readonly type = '[Home API] Fetch All Products Success';
  constructor(public products:Product[]){}
}

export class FectchAllProductsFailure {
  static readonly type = '[Home API] Fetch All Products Failure';
  constructor(public error:string){}  

}





