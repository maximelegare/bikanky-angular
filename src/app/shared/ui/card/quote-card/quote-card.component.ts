import { Component, OnInit } from '@angular/core';
import { Testimonial } from 'src/app/context/testimonials/testimonial.model';
import { Input } from '@angular/core';

@Component({
  selector: 'app-quote-card',
  templateUrl: './quote-card.component.html',
  styleUrls: ['./quote-card.component.css']
})
export class QuoteCardComponent implements OnInit {

  constructor() { }

  @Input() testimonial:Testimonial;

  ngOnInit(): void {
  }

}
