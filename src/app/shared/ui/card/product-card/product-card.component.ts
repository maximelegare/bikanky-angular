import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/context/products/product.model';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product:Product;
  

  constructor() { }

  ngOnInit(): void {
  }

  refactorPrice(price:number){
    return price.toFixed(2)
  }


}
