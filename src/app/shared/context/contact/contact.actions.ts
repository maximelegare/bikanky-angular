import { ContactPage } from "./contact.model";


export class FectchContactData {
    static readonly type = '[Contact API] Fetch Contact';
  }
  
  export class FectchContactDataSuccess {
    static readonly type = '[Contact API] Fetch Contact Success';
    constructor(public contactPageData:ContactPage){}
  }
  
  export class FectchContactDataFailure {
    static readonly type = '[Contact API] Fetch Contact Failure';
    constructor(public error:string){}  
  }