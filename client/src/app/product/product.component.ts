import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { FectchProducts, FilterCurrentProductVariant } from '../shared/context/products/products.actions';
import { Select } from '@ngxs/store';
import { ProductsState } from '../shared/context/products/products.state';
import { Observable } from 'rxjs';
import { Product } from '../shared/context/products/product.model';
import { ProductVariant } from '../shared/context/products/product.model';
import * as AOS from 'aos';
import { Router } from '@angular/router';
import { Event } from '@angular/router';



@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(
    public route: ActivatedRoute,
    public store: Store,
    public router: Router
  ) {

    // Run this code each time the route changes to filter again the variant 
    router.events.subscribe(() => {
      const skuParam = this.route.snapshot.params['sku'];
      
      this.product$.subscribe((product) => {
        this.allVariants = product.variants;  
        this.store.dispatch(new FilterCurrentProductVariant(product.variants, skuParam));
        });
    });
  }
  currentVariant: ProductVariant;
  allVariants: ProductVariant[];

  @Select(ProductsState.getPageProduct) product$: Observable<Product>;
  @Select(ProductsState.getCurrentVariant) currentVariant$: Observable<ProductVariant>;


  ngOnInit(): void {
    const slugParam = this.route.snapshot.params['slug'];

    
    this.store.dispatch(new FectchProducts('product', slugParam));
    AOS.init({ easing: 'ease-in-out-back', startEvent: 'load' });
  }
}
