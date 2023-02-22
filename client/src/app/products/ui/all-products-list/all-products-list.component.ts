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
  @Select(ProductsState.getAllMergedProducts) products$: Observable<Product[]>;
  
  @Input() mapAllVariants: boolean = false;

  products: any[];

  ngOnInit(): void {
    this.products$.subscribe((products) => console.log(products))
    
  }
}
