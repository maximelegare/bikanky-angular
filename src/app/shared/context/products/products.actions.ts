import { Product } from "./product.model";



export class FectchProducts {
  static readonly type = '[Home API] Fetch Home Products';
  constructor(public page?:string){}
}

export class FectchProductsSuccess {
  static readonly type = '[Home API] Fetch Home Products Success';
  constructor(public products:Product[]){}
}

export class FectchProductsFailure {
  static readonly type = '[Home API] Fetch Home Products Failure';
  constructor(public error:string){}  
}












