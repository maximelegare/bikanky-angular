import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import {  from, tap, catchError } from 'rxjs';
import { SanityService } from 'src/app/shared/services/sanity/sanity.service';
import { ContactData } from './contact.model';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GeneralState } from '../general/general.state';


import {
  FectchContactData,
  FectchContactDataFailure,
  FectchContactDataSuccess
} from './contact.actions';

interface ContactStateModel {
  contactPageData: ContactData | null;
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
  static getContactPageData(state: ContactStateModel) {
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
         image{"imageUrl": asset->url},
         body{ ${this.lang}[]},
         contactMedias
        }`
      )
    ).pipe(
      // Take the returned value and return a new success action containing the products
      tap((contactPageData) => {

        // puts in an array and take only the first element of it 
        // bc even when i select only one element with sanity => returns an object but typecript doesnt recognize it.
        // force to create an array => then select only its first element
        ctx.dispatch(new FectchContactDataSuccess([contactPageData][0]));
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
      contactPageData: contactPageData[0],
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
