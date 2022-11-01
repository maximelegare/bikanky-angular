export interface StylismService {
    _id: string;
    image: {
      imageUrl: string;
    };
    title:string;
    slug: string[];
    price:number;
    tags:string[];
    shortDescrition:string;
    body:object;
    showOnHomePage:boolean;
  }