import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { from, tap, catchError } from 'rxjs';
import { SanityService } from 'src/app/shared/services/sanity/sanity.service';
import { AboutData } from './about.model';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GeneralState } from '../general/general.state';

import {
  FectchAboutData,
  FectchAboutDataSuccess,
  FectchAboutDataFailure,
} from './about.actions';

interface AboutStateModel {
  aboutPageData: AboutData | null;
  status: 'pending' | 'loading' | 'success' | 'failure';
  error: '' | null;
}

@State<AboutStateModel>({
  name: 'contact',
  defaults: {
    aboutPageData: null,
    status: 'pending',
    error: null,
  },
})
@Injectable()
export class AboutState {
  constructor(private sanity: SanityService) {
    this.lang$.subscribe((lang: string) => {
      this.lang = lang;
    });
  }
  @Select(GeneralState.getLang) lang$: Observable<string>;

  lang = '';

  @Selector()
  static getAboutPageData(state: AboutStateModel) {
    return state.aboutPageData;
  }

  @Action(FectchAboutData)
  fectchAllProducts(ctx: StateContext<AboutStateModel>) {
    // Call the fetch products method and cancel if problem
    return from(
      this.sanity.fetchQuerry(
        `*[_type == "contact" ]{
          _id,
         image{"imageUrl": asset->url},
         body{ ${this.lang}[]},
         contactMedias
        }`
      )
    ).pipe(
      // Take the returned value and return a new success action containing the products
      tap((aboutPageData) => {
        // puts in an array and take only the first element of it
        // bc even when i select only one element with sanity => returns an object but typecript doesnt recognize it.
        // force to create an array => then select only its first element
        ctx.dispatch(new FectchAboutDataSuccess([aboutPageData][1]));
      }),
      // Or... if it errors return a new failure action containing the error
      catchError((error) => ctx.dispatch(new FectchAboutDataFailure(error)))
    );
  }

  @Action(FectchAboutDataSuccess)
  fectchAllProductsSuccess(
    ctx: StateContext<AboutStateModel>,
    { aboutPageData }: FectchAboutDataSuccess
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      aboutPageData: aboutPageData[0],
      status: 'success',
      error: null,
    });
  }

  @Action(FectchAboutDataFailure)
  fectchAllProductsFailure(ctx: StateContext<AboutStateModel>) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      status: 'failure',
      error: null,
    });
  }
}
