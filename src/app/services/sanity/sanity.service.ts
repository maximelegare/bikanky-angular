import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/context/products/product.model';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  constructor() {}

  sanityClientCredentials = {
    option: sanityClient({
      projectId: '0mg3b574',
      dataset: 'production',
    }),
  };

  urlFor = (source: any) =>
    imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async fetchProducts(query: string): Promise<Product[]> {
    const products = await this.sanityClientCredentials.option.fetch(query);
    return products;
  }
}
