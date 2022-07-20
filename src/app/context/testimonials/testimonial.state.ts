import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import {  from, tap, catchError } from 'rxjs';
import { SanityService } from 'src/app/services/sanity/sanity.service';
import { Testimonial } from './testimonial.model';

import {
  FectchTestimonials,
  FectchTestimonialsFailure,
  FectchTestimonialsSuccess,
} from './testimonial.actions';

interface TestimonialsStateModel {
  testimonials: Testimonial[];
  status: 'pending' | 'loading' | 'success' | 'failure';
  error: '' | null;
}

@State<TestimonialsStateModel>({
  name: 'testimonials',
  defaults: {
    testimonials: [],
    status: 'pending',
    error: null,
  },
})
@Injectable()
export class TestimonialsState {
  constructor(private sanity: SanityService) {}

  @Selector()
  static getTestimonials(state: TestimonialsStateModel) {
    console.log(state.testimonials);
    return state.testimonials;
  }

  @Action(FectchTestimonials)
  fectchAllProducts(ctx: StateContext<TestimonialsStateModel>) {
    // Call the fetch products method and cancel if problem
    return from(
      this.sanity.fetchQuerry(
        `*[_type == "testimonial" && showOnHomePage == true]{
          _id,
         personName,
         testimonial{ fr[0]{children[0]{text}}},
         showOnHomePage
        }`
      )
    ).pipe(
      // Take the returned value and return a new success action containing the products
      tap((testimonials) => {
        ctx.dispatch(new FectchTestimonialsSuccess(testimonials));
      }),
      // Or... if it errors return a new failure action containing the error
      catchError((error) => ctx.dispatch(new FectchTestimonialsFailure(error)))
    );
  }

  @Action(FectchTestimonialsSuccess)
  fectchAllProductsSuccess(
    ctx: StateContext<TestimonialsStateModel>,
    { testimonials }: FectchTestimonialsSuccess
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      testimonials: testimonials,
      status: 'success',
      error: null,
    });
  }

  @Action(FectchTestimonialsFailure)
  fectchAllProductsFailure(
    ctx: StateContext<TestimonialsStateModel>,
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      status: 'failure',
      error: null,
    });
  }
}
