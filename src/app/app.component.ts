import { Component, OnInit } from '@angular/core';
import { ShopifyService } from './services/shopify/shopify.service';
import {  Select } from '@ngxs/store';
import { Store } from '@ngxs/store';
import { FectchAllProducts } from './context/products/products.actions';
import { ProductsState } from './context/products/products.state';
import { Observable } from 'rxjs';
import { Product } from './context/products/product.model';
import { SanityService } from './services/sanity/sanity.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @Select(ProductsState.getProducts) products$:Observable<Product[]>


  constructor(private store: Store, private sanity:SanityService) {}

  ngOnInit(): void {
   this.store.dispatch(new FectchAllProducts())
    // this.sanity.fetchProducts()
  }
}
