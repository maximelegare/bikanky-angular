import { Testimonial, FindMeLocations } from "./other-cards.model";


export class FectchHomeDataOtherCards {
    static readonly type = '[Home API] Fetch Testimonials';
  }
  
  export class FectchHomeDataSuccess {
    static readonly type = '[Home API] Fetch Testimonials Success';
    constructor(public homeData:any ){}
  }
  
  export class FectchHomeDataFailure {
    static readonly type = '[Home API] Fetch Testimonials Failure';
    constructor(public error:string){}  
  }