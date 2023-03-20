interface Product {
  _id: string;
  mainProductTitle: string;
  bulletPoints?: Bullet[];
  shortDescription: any;
  origin: any;
  body: any;
  variants: ProductVariant[];
}

interface ProductVariant {
  mainProductTitle: string;
  variantTitle: string;
  price: number;
  images: Image[];
  mainImage:Image;
  lengthType: { title: string };
  options: string[];
  dimensions: string[];
  fabrics: string[];
  maintenance: string[];
  star: boolean;
  starOfTheSeason: boolean;
  tags: string[];
  slug: string[];
  sku: string;
  showOnHomePage?: boolean;
  isActive: boolean;
}

interface Image {
  imageUrl: string;
}

interface Bullet {
  icon: string;
  text: any;
}

export { Product, Bullet, ProductVariant };
