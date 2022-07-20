import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/context/products/product.model'; 
import { Select } from '@ngxs/store';
import { ProductsState } from 'src/app/context/products/products.state';


@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css']
})
export class ProductsSectionComponent implements OnInit {

  constructor() { }
  @Select(ProductsState.getProducts) products$:Observable<Product[]>
  



  ngOnInit(): void {
  }

}
