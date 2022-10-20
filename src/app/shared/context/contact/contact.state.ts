import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import {  from, tap, catchError } from 'rxjs';
import { SanityService } from 'src/app/shared/services/sanity/sanity.service';
import { ContactPage } from './contact.model';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GeneralState } from '../general/general.state';


import {
  FectchContactData,
  FectchContactDataFailure,
  FectchContactDataSuccess
} from './contact.actions';

interface ContactStateModel {
  contactPageData: ContactPage |null;
  status: 'pending' | 'loading' | 'success' | 'failure';
  error: '' | null;
}

@State<ContactStateModel>({
  name: 'contact',
  defaults: {
    contactPageData: null,
    status: 'pending',
    error: null,
  },
})
@Injectable()
export class ContactState {
  constructor(private sanity: SanityService) {
    this.lang$.subscribe((lang:string) => {
      this.lang = lang
    })  
  }
  @Select(GeneralState.getLang) lang$:Observable<string>

  lang = ""

  @Selector()
  static getTestimonials(state: ContactStateModel) {
    return state.contactPageData;
  }

  @Action(FectchContactData)
  fectchAllProducts(ctx: StateContext<ContactStateModel>) {
    // Call the fetch products method and cancel if problem
    console.log("here")
    return from(
      this.sanity.fetchQuerry(
        `*[_type == "contact" ]{
          _id,
         image,
         contactText{ ${this.lang}[]{children[]{text}}},
         contactMedias
        }[0]`
      )
    ).pipe(
      // Take the returned value and return a new success action containing the products
      tap((contactPageData) => {
        console.log(contactPageData)
        // ctx.dispatch(new FectchContactDataSuccess(contactPageData));
      }),
      // Or... if it errors return a new failure action containing the error
      catchError((error) => ctx.dispatch(new FectchContactDataFailure(error)))
    );
  }

  @Action(FectchContactDataSuccess)
  fectchAllProductsSuccess(
    ctx: StateContext<ContactStateModel>,
    { contactPageData }: FectchContactDataSuccess
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      contactPageData: contactPageData,
      status: 'success',
      error: null,
    });
  }

  @Action(FectchContactDataFailure)
  fectchAllProductsFailure(
    ctx: StateContext<ContactStateModel>,
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      status: 'failure',
      error: null,
    });
  }
}
