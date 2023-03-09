

export interface StylismService {
    _id: string;
    image: {
      imageUrl: string;
    };
    title:string;
    slug: string[];
    price:number;
    tags:string[];
    shortDescription:any;
    body:object;
    showOnHomePage:boolean;
    isActive:boolean;
  }