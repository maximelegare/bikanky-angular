interface Product {
  title: string;
  slug: string;
  defaultProductVariant: productVariant;
  variants: productVariant[];
  tags: string[];
  bullets: bullet[];
}

interface productVariant {
  title: string;
  weight: string;
  price: number;
  images: string[];
}

interface bullet {
  icon: string;
  text: string;
}

interface Products {
  products: Product[];
  status: 'pending' | 'loading' | 'success' | 'failure';
  error: '' | null;
}

export { Product, Products };
