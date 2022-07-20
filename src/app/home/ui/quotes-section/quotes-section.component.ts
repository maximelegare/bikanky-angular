import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { TestimonialsState } from 'src/app/context/testimonials/testimonial.state';
import { Observable } from 'rxjs';
import { Testimonial } from 'src/app/context/testimonials/testimonial.model';


@Component({
  selector: 'app-quotes-section',
  templateUrl: './quotes-section.component.html',
  styleUrls: ['./quotes-section.component.css']
})
export class QuotesSectionComponent implements OnInit {

  constructor() { }

  @Select(TestimonialsState.getTestimonials) testimonials$:Observable<Testimonial[]>

  ngOnInit(): void {
  }

}
