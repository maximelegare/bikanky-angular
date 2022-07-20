import { Injectable } from '@angular/core';
import * as Client from 'shopify-buy';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root',
})
export class ShopifyService {
  constructor() {}

  async fetchData() {
    try {
      const client =  Client.buildClient({
        domain: environment.shopifyDomain,
        storefrontAccessToken: environment.shopifyStoreFrontAccessToken,
      });
      
      

    } catch (err) {
      console.log(err);
    }
  }
}
