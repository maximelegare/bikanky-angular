import { Injectable } from '@angular/core';
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { environment } from 'src/environments/environment';
import { Product } from 'src/app/shared/context/products/product.model';

@Injectable({
  providedIn: 'root',
})
export class SanityService {
  constructor() {}

  sanityClientCredentials = {
    option: sanityClient({
      projectId: environment.NG_APP_SANITY_PROJECT_ID,
      dataset: 'production',
    }),
  };

  urlFor = (source: any) =>
    imageUrlBuilder(this.sanityClientCredentials.option).image(source);

  async fetchQuerry(query: string): Promise<[]> {
    const data = await this.sanityClientCredentials.option.fetch(query);
    return data;
  }
}
