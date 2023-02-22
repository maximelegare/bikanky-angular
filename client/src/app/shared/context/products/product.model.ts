interface Product {
  _id: string;
  showOnHomePage?: boolean;
  isActive: boolean;

  star: boolean;
  starOfTheSeason: boolean;
  title: string;
  slug: any;
  defaultProductVariant: ProductVariant;
  variants: ProductVariant[];
  tags: string[];
  bulletPoints?: Bullet[];
  shortDescription: any;
  body: any;
}

interface ProductVariant {
  variantTitle: string;
  price: number;
  images: Image[];
  lengthType: { title: string };
  options: string[];
}

interface Image {
  imageUrl: string;
}

interface Bullet {
  icon: string;
  text: any;
}

export { Product, Bullet, ProductVariant };
