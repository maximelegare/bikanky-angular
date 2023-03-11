import { AboutData } from "./about.model";


export class FectchAboutData {
    static readonly type = '[About API] Fetch About';
  }
  
  export class FectchAboutDataSuccess {
    static readonly type = '[About API] Fetch About Success';
    constructor(public aboutPageData:AboutData[]){}
  }
  
  export class FectchAboutDataFailure {
    static readonly type = '[About API] Fetch About Failure';
    constructor(public error:string){}  
  }