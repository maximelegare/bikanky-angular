import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { GeneralState } from 'src/app/shared/context/general/general.state';
import { ProductVariant } from 'src/app/shared/context/products/product.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-details-product-section',
  templateUrl: './details-product-section.component.html',
  styleUrls: ['./details-product-section.component.css'],
})
export class DetailsProductSectionComponent implements OnInit {
  constructor() {}

  @Input() currentVariant: ProductVariant;
  
  


  ngOnInit(): void {
    console.log(this.currentVariant)
  }
}
