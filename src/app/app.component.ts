import { Component, OnInit } from '@angular/core';
import { ShopifyService } from './services/shopify/shopify.service';
import { SanityService } from './services/sanity/sanity.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bikanky';
  products = [] 



  constructor(private sanity:SanityService) {}

  ngOnInit(): void {
   this.sanity.fetchProducts()
  }
}
