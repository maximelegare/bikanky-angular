import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { FectchProducts } from '../shared/context/products/products.actions';
import { Select } from '@ngxs/store';
import { ProductsState } from '../shared/context/products/products.state';
import { Observable } from 'rxjs';
import { Product } from '../shared/context/products/product.model';
import { ProductVariant } from '../shared/context/products/product.model';
import * as AOS from 'aos';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  constructor(public route: ActivatedRoute, public store: Store) {}

  @Select(ProductsState.getPageProduct) product$: Observable<Product>;

  currentVariant: ProductVariant;

  ngOnInit(): void {
    const slugParam = this.route.snapshot.params['slug'];
    const skuParam = this.route.snapshot.params['sku'];

    this.store.dispatch(new FectchProducts('product', slugParam));
    AOS.init({ easing: 'ease-in-out-back', startEvent: 'load' });

    this.product$.subscribe((product) => {
      this.currentVariant = product.variants
        .filter((variant) => variant.sku === skuParam)
        .map((variant) => {
          return {
            ...variant,
            body: product.body,
            mainProductTitle: product.mainProductTitle,
          };
        })[0];
    });
  }
}
