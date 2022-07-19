import { Component, OnInit } from '@angular/core';
import { ShopifyService } from './services/shopify/shopify.service';
import { SanityService } from './services/sanity/sanity.service';
import { Store } from '@ngrx/store';
import { loadProducts } from './store/products/products.actions';
import { selectAllProducts } from './store/products/product.selector';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'bikanky';
  products = [] 

  // public allProducts$ = this.store.select(selectAllProducts);


  constructor(private store:Store) {}

  ngOnInit(): void {
   this.store.dispatch(loadProducts())
  }
}
