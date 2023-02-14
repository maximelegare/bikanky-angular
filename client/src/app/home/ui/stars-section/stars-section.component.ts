import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ProductsState } from 'src/app/shared/context/products/products.state';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/context/products/product.model';

@Component({
  selector: 'app-stars-section',
  templateUrl: './stars-section.component.html',
  styleUrls: ['./stars-section.component.css'],
})
export class StarsSectionComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Select(ProductsState.getStarProducts) starProducts$: Observable<Product[]>;
  @Select(ProductsState.getStarOfTheSeasonProduct) starOfTheSeasonProduct$: Observable<Product>;

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
}
