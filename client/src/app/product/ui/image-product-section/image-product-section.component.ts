import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/context/products/product.model';

@Component({
  selector: 'app-image-product-section',
  templateUrl: './image-product-section.component.html',
  styleUrls: ['./image-product-section.component.css']
})
export class ImageProductSectionComponent implements OnInit {

  constructor() { }
  @Input() images:any[];
  

  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 40,
    pagination: { clickable: true },
    navigation: true,
  };

  ngOnInit(): void {
  }

}
