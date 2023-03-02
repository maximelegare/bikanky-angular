import { Component, OnInit, Input } from '@angular/core';
import { ProductVariant } from 'src/app/shared/context/products/product.model';

@Component({
  selector: 'app-select-product-section',
  templateUrl: './select-product-section.component.html',
  styleUrls: ['./select-product-section.component.css']
})
export class SelectProductSectionComponent implements OnInit {

  constructor() { }


  @Input() currentVariant:ProductVariant | null
  @Input() allVariants:ProductVariant[]

  ngOnInit(): void {
  }

}
