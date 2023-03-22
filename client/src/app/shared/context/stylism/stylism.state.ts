import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { from, tap, catchError } from 'rxjs';
import { SanityService } from 'src/app/shared/services/sanity/sanity.service';
import { StylismService } from './stylism.model';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GeneralState } from '../general/general.state';

import {
  FetchStylismServices,
  FetchStylismServicesSuccess,
  FetchStylismServicesFailure,
} from './stylism.actions';

interface StylismServicesStateModel {
  stylismServices: StylismService[];
  status: 'pending' | 'loading' | 'success' | 'failure';
  error: '' | null;
}

@State<StylismServicesStateModel>({
  name: 'stylismServices',
  defaults: {
    stylismServices: [],
    status: 'pending',
    error: null,
  },
})
@Injectable()
export class StylismServicesState {
  constructor(private sanity: SanityService) {
    this.lang$.subscribe((lang: string) => {
      this.lang = lang;
    });
  }
  @Select(GeneralState.getLang) lang$: Observable<string>;

  lang = '';

  @Selector()
  static getStylismServices(state: StylismServicesStateModel) {
    return state.stylismServices;
  }

  @Action(FetchStylismServices)
  fetchStylismServices(ctx: StateContext<StylismServicesStateModel>) {
    // Call the fetch products method and cancel if problem
    // image{"imageUrl": asset->url},
    return from(
      this.sanity.fetchQuerry(
        `*[_type == "stylismService" && isActive && showOnHomePage  ]{
          _id,
         isActive,
         showOnHomePge,
         tags, 
         title{${this.lang}},
         slug,
         price,
         shortDescription{${this.lang}[0]{children[0]{text}}},
         image{"imageUrl": asset->url}, 
         body{ ${this.lang}[]},
        }`
      )
    ).pipe(
      // Take the returned value and return a new success action containing the products
      tap((stylismServices) => {
        // puts in an array and take only the first element of it
        // bc even when i select only one element with sanity => returns an object but typecript doesnt recognize it.
        // force to create an array => then select only its first element
        ctx.dispatch(new FetchStylismServicesSuccess(stylismServices));
      }),
      // Or... if it errors return a new failure action containing the error
      catchError((error) =>
        ctx.dispatch(new FetchStylismServicesFailure(error))
      )
    );
  }

  @Action(FetchStylismServicesSuccess)
  fetchStylismServicesSuccess(
    ctx: StateContext<StylismServicesStateModel>,
    { stylismServices }: FetchStylismServicesSuccess
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      stylismServices: stylismServices,
      status: 'success',
      error: null,
    });
  }

  @Action(FetchStylismServicesFailure)
  fetchStylismServicesFailure(ctx: StateContext<StylismServicesStateModel>) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      status: 'failure',
      error: null,
    });
  }
}
