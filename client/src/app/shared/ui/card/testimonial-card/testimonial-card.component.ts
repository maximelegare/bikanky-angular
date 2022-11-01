import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/shared/context/testimonials/testimonial.model';
import { Input } from '@angular/core';
import { Select } from '@ngxs/store';
import { GeneralState } from 'src/app/shared/context/general/general.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
})
export class TestimonialCardComponent implements OnInit {
  constructor() {}

  @Input() testimonial: Testimonial;

  @Select(GeneralState.getLang) lang$: Observable<string>;

  lang = '';

  

  ngOnInit(): void {
    this.lang$.subscribe((lang) => {
      this.lang = lang;
    });
  }
}
