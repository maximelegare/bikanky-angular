import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

import { Product } from 'src/app/shared/context/products/product.model';

@Component({
  selector: 'app-details-product-section',
  templateUrl: './details-product-section.component.html',
  styleUrls: ['./details-product-section.component.css'],
})
export class DetailsProductSectionComponent implements OnInit {
  constructor() {}

  @Input() product: Product;
  
  lang = 'en'

  ngOnInit(): void {
    console.log(this.product)
  }
}
