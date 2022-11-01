import { StylismService } from "./stylism.model";


export class FetchStylismServices {
    static readonly type = '[Contact API] Fetch Stylism Services';
  }
  
  export class FetchStylismServicesSuccess {
    static readonly type = '[Contact API] Fetch Stylism Services Success';
    constructor(public stylismServices:StylismService[]){}
  }
  
  export class FetchStylismServicesFailure {
    static readonly type = '[Contact API] Fetch Stylism Services Failure';
    constructor(public error:string){}  
  }