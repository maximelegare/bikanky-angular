import { Component, OnInit, Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { ProductsState } from 'src/app/shared/context/products/products.state';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/context/products/product.model';

@Component({
  selector: 'app-all-products-list',
  templateUrl: './all-products-list.component.html',
  styleUrls: ['./all-products-list.component.css'],
})
export class AllProductsListComponent implements OnInit {
  constructor() {}
  @Select(ProductsState.getProducts) products$: Observable<Product[]>;
  @Input() mapAllVariants: boolean = false;

  products: any[];

  ngOnInit(): void {
    // This adds all variants and product to the products variable to display everything on the screen.
    this.products$.subscribe((products) => {
      if (this.mapAllVariants) {
        let allProducts = products.map((product) => {
          if (product.variants)
            return [...this.products, {...product}, ...product.variants];
          else return [...this.products, product];
        });
        this.products = allProducts.flat(1);
      } else {
        this.products = products;
        console.log(products)
      }
    });
  }
}
