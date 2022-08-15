import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { from, tap, catchError } from 'rxjs';



interface GeneralStateModel {
  lang: string;
}


@State<GeneralStateModel>({
  name: 'general',
  defaults: {
    lang: "en",
  },
})

@Injectable()
export class GeneralState {
  constructor() {}

  @Selector()
  static getLang(state: GeneralStateModel) {
    return state.lang;
  }

 

  // Fetch all products
  // @Action(FectchProductsSuccess)
  // fectchProductsSuccess(
  //   ctx: StateContext<ProductsStateModel>,
  //   { products }: FectchProductsSuccess
  // ) {
  //   const state = ctx.getState();

  //   ctx.setState({
  //     ...state,
  //     products: products,
  //     status: 'success',
  //     error: null,
  //   });
  // }
 
}
