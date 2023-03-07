export interface Testimonial {
  _id: string;
  personName: string;
  testimonial: any;
  showOnHomePage: boolean;
}

export interface FindMeLocations {
  _id: string;
  title: string;
  address: {
    street: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  phoneNumber:number;
  image: {
    imageUrl: string;
  };
  logo: {
    imageUrl: string;
  };
}
