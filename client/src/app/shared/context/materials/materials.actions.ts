import { MaterialsCategory } from "./materials.model";

export class FetchMaterialsCategories {
    static readonly type = '[Materials API] Fetch Materials Categories';
  }
  
  export class FetchMaterialsCategoriesSuccess {
    static readonly type = '[Materials API] Fetch Materials Categories Success';
    constructor(public materialsCategories:MaterialsCategory[]){}
  }
  
  export class FetchMaterialsCategoriesFailure {
    static readonly type = '[Materials API] Fetch Materials Failure Categories';
    constructor(public error:string){}  
  }