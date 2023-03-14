import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import SwiperCore, { Swiper } from 'swiper';
import { Pagination, Navigation, Thumbs } from 'swiper';
import { Router } from '@angular/router';

// import { GeneralState } from 'src/app/shared/context/general/general.state';

SwiperCore.use([Pagination, Navigation, Thumbs]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor(public router: Router) {
    this.startSwiper()
  }

  @Input() slides: Array<any>;
  @Input() variant: string;
  @Input() config: any;
  @Input() withThumbs: boolean = false;

  numberOfSlides: number = 3;
  
  startSwiper() {
    if (this.withThumbs) {
      let swiper = new Swiper('.swiperThumbs', {
        spaceBetween: 10,
        slidesPerView: 2,
        freeMode: true,
        watchSlidesProgress: true,
        breakpoints:{
          640: {
            slidesPerView:3
          },
          768: {
            slidesPerView:4
          },
        }
      });
      var swiper2 = new Swiper('.swiperMain', {
        spaceBetween: 40,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        thumbs: {
          swiper: swiper,
        },
      });
    }
  }

  ngOnInit(): void {
    this.startSwiper()
  }
}
