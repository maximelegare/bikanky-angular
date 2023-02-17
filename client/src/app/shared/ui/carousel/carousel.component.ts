import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import SwiperCore, { Swiper } from 'swiper';
import { Pagination, Navigation, Thumbs } from 'swiper';

// import { GeneralState } from 'src/app/shared/context/general/general.state';

SwiperCore.use([Pagination, Navigation, Thumbs]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  @Input() slides: Array<any>;
  @Input() variant: string;
  @Input() config: any;
  @Input() withThumbs: boolean = false;

  numberOfSlides: number = 3;

  ngOnInit(): void {
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 10,
      slidesPerView: 4,
      freeMode: true,
      watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
      spaceBetween: 10,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: {
        swiper: swiper,
      },
    });
  }
}
