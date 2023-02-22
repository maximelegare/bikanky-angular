import { Product } from "./product.model";
import { Observable } from "rxjs";


export class FectchProducts {
  static readonly type = '[Home API] Fetch Home Products';
  constructor(public page?:string, public slug?:Observable<string>){}
}

export class FectchProductsSuccess {
  static readonly type = '[Home API] Fetch Home Products Success';
  constructor(public products:Product[]){}
}

export class MergeDefaultAndVariants {
  static readonly type = '[Home API] Merge Default and Variants';
  constructor(public products:Product[]){}
}


export class FectchHomeProductsSuccess {
  static readonly type = '[Home API] Fetch Home Products Success';
  constructor(public homeProducts:Product[]){}
}

export class FectchPageProductSuccess {
  static readonly type = '[Home API] Fetch Home Products Success';
  constructor(public pageProduct:Product[]){}
}

export class FectchStarProductsSuccess {
  static readonly type = '[Home API] Fetch Stars Products Success';
  constructor(public starProducts:Product[]){}
}

export class FectchProductsFailure {
  static readonly type = '[Home API] Fetch Home Products Failure';
  constructor(public error:string){}  
}












