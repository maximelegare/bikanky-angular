import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FectchTestimonials } from 'src/app/shared/context/testimonials/testimonial.actions';

@Component({
  selector: 'app-index',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new FectchTestimonials());
  }
}
