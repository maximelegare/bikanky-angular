import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { OtherCardsState } from 'src/app/shared/context/other-cards/other-cards.state'; 
import { Observable } from 'rxjs';
import { Testimonial } from 'src/app/shared/context/other-cards/other-cards.model';


@Component({
  selector: 'app-testimonials-section',
  templateUrl: './testimonials-section.component.html',
  styleUrls: ['./testimonials-section.component.css']
})
export class QuotesSectionComponent implements OnInit {

  constructor() { }

  @Select(OtherCardsState.getTestimonials) testimonials$:Observable<Testimonial[]>

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
