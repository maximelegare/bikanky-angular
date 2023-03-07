import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { from, tap, catchError } from 'rxjs';
import { SanityService } from 'src/app/shared/services/sanity/sanity.service';
import { Testimonial, FindMeLocations } from './other-cards.model';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GeneralState } from '../general/general.state';

import {
  FectchHomeDataOtherCards,
  FectchHomeDataSuccess,
  FectchHomeDataFailure,
} from './other-cards.actions';

interface OtherCardsStateModel {
  testimonials: Testimonial[];
  findMeLocations: [];
  status: 'pending' | 'loading' | 'success' | 'failure';
  error: '' | null;
}

@State<OtherCardsStateModel>({
  name: 'testimonials',
  defaults: {
    testimonials: [],
    findMeLocations: [],
    status: 'pending',
    error: null,
  },
})
@Injectable()
export class OtherCardsState {
  constructor(private sanity: SanityService) {
    this.lang$.subscribe((lang: string) => {
      this.lang = lang;
    });
  }
  @Select(GeneralState.getLang) lang$: Observable<string>;

  lang = '';

  @Selector()
  static getTestimonials(state: OtherCardsStateModel) {
    return state.testimonials;
  }

  @Selector()
  static getFindMeLocations(state: OtherCardsStateModel) {
    return state.findMeLocations;
  }

  @Action(FectchHomeDataOtherCards)
  fectchTestimonials(ctx: StateContext<OtherCardsStateModel>) {
    // Call the fetch products method and cancel if problem
    return from(
      this.sanity.fetchQuerry(
        `{
          'testimonials': *[_type == "testimonial" && showOnHomePage]{
          _id,
         personName,
         testimonial{ ${this.lang}[]{children[]{text}}},
         showOnHomePage
        },
        'findMeLocations': *[_type == "findMe"]{
          _id,
         title,
         phoneNumber,
         address,
         image{"imageUrl": asset->url},
         logo{"imageUrl": asset->url}
        }
      }
      `
      )
    ).pipe(
      // Take the returned value and return a new success action containing the products
      tap((homeData) => {
        ctx.dispatch(new FectchHomeDataSuccess(homeData));
      }),
      // Or... if it errors return a new failure action containing the error
      catchError((error) => ctx.dispatch(new FectchHomeDataFailure(error)))
    );
  }

  @Action(FectchHomeDataSuccess)
  fectchTestimonialsSuccess(
    ctx: StateContext<OtherCardsStateModel>,
    { homeData }: FectchHomeDataSuccess
  ) {
    const state = ctx.getState();
    console.log("homeData",homeData)
    ctx.setState({
      ...state,
      testimonials: homeData.testimonials,
      findMeLocations: homeData.findMeLocations,
      status: 'success',
      error: null,
    });
  }

  @Action(FectchHomeDataFailure)
  fectchTestimonialsFailure(ctx: StateContext<OtherCardsStateModel>) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      status: 'failure',
      error: null,
    });
  }
}
