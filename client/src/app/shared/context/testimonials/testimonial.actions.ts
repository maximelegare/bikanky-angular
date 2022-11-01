import { Testimonial } from "./testimonial.model";


export class FectchTestimonials {
    static readonly type = '[Home API] Fetch Testimonials';
  }
  
  export class FectchTestimonialsSuccess {
    static readonly type = '[Home API] Fetch Testimonials Success';
    constructor(public testimonials:Testimonial[]){}
  }
  
  export class FectchTestimonialsFailure {
    static readonly type = '[Home API] Fetch Testimonials Failure';
    constructor(public error:string){}  
  }