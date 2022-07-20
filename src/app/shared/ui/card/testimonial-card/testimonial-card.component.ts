import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/shared/context/testimonials/testimonial.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-testimonial-card',
  templateUrl: './testimonial-card.component.html',
})
export class QuoteCardComponent implements OnInit {

  constructor() { }

  @Input() testimonial:Testimonial;

  ngOnInit(): void {
  }

}
