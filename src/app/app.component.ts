import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FectchAllProducts } from './shared/context/products/products.actions';
import { FectchTestimonials } from './shared/context/testimonials/testimonial.actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

 
  constructor(private store: Store) {}

  ngOnInit(): void {
   this.store.dispatch(new FectchAllProducts())
   this.store.dispatch(new FectchTestimonials())
  }
  
}
