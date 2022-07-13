import { Component, OnInit } from '@angular/core';
import * as Client from 'shopify-buy';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const client = Client.buildClient({
      domain: environment.shopifyDomain,
      storefrontAccessToken: environment.shopifyStoreFrontAccessToken,
    });
  }
}
