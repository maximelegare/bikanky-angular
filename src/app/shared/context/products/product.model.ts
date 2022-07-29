interface Product {
  _id:string
  showOnHomePage?:boolean;
  title: string;
  slug: any;
  defaultProductVariant: ProductVariant;
  variants: ProductVariant[];
  tags: string[];
  bulletPoints?: Bullet[];
}

interface ProductVariant {
  variantTitle: string;
  weight: string;
  price: number;
  images: Image[];
}

interface Image {
  imageUrl:string
}

interface Bullet {
  icon: string;
  text:any;
}

export { Product, Bullet };



