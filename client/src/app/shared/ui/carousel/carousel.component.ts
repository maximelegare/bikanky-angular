import { Component, Input, OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import SwiperCore from "swiper"
import { Pagination, Navigation } from 'swiper';

SwiperCore.use([Pagination, Navigation])


@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {

  constructor() { }

  @Input() slides:Array<any> 
  @Input() variant:string
  @Input() slidePerView:number = 3

  ngOnInit(): void {
     
  }

}
