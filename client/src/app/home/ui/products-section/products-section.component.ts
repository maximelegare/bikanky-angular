import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/context/products/product.model';
import { Select } from '@ngxs/store';
import { ProductsState } from 'src/app/shared/context/products/products.state';


@Component({
  selector: 'app-products-section',
  templateUrl: './products-section.component.html',
  styleUrls: ['./products-section.component.css'],
})
export class ProductsSectionComponent implements OnInit {
  constructor() {}
  @Select(ProductsState.getHomeProducts) products$: Observable<Product[]>;

  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 40,
    pagination: { clickable: true },
    navigation: true,
    breakpoints: {
      1280: {
        slidesPerView: 4,
      },
      1080: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },
      640: {
        slidesPerView: 1,
      },
    },
  };
 

  ngOnInit(): void {
   
  }
}
