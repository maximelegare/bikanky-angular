import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import SwiperCore from 'swiper';
import { Pagination, Navigation } from 'swiper';

import { Select } from '@ngxs/store';

// import { GeneralState } from 'src/app/shared/context/general/general.state';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  swiperConfig: any = {
    slidesPerView: 'auto',
    spaceBetween: 40,
    pagination: { clickable: true },
    navigation: true,
    breakpoints: {
      1536: {
        slidesPerView: 5,
      },
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
  
  @Input() slides: Array<any>;
  @Input() variant: string;
  // @Select(GeneralState.carouselSlidePerView)
  // carouselSlidesPerView$: Observable<number>;

  numberOfSlides: number = 3;

  ngOnInit(): void {
    // this.carouselSlidesPerView$.subscribe((slidesPerView) => {
    //   console.log('numberOfSlides', this.numberOfSlides);
    //   console.log('slidesPerView', slidesPerView);
    //   this.numberOfSlides = slidesPerView;
    //   console.log('numberOfSlidesChanged', this.numberOfSlides);
    // });
  }
}
