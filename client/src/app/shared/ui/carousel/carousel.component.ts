import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import SwiperCore from 'swiper';
import { Pagination, Navigation } from 'swiper';


// import { GeneralState } from 'src/app/shared/context/general/general.state';

SwiperCore.use([Pagination, Navigation]);

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  constructor() {}

  

  @Input() slides: Array<any>;
  @Input() variant: string;
  @Input() config:any;

  numberOfSlides: number = 3;

  ngOnInit(): void {}
}
