import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { from, tap, catchError } from 'rxjs';
import { SanityService } from 'src/app/shared/services/sanity/sanity.service';
import { MaterialsCategory } from './materials.model';
import { Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GeneralState } from '../general/general.state';

import {
  FetchMaterialsCategories,
  FetchMaterialsCategoriesFailure,
  FetchMaterialsCategoriesSuccess,
} from './materials.actions';

interface MaterialsCategoriesStateModel {
  materialsCategories: MaterialsCategory[];
  status: 'pending' | 'loading' | 'success' | 'failure';
  error: '' | null;
}

@State<MaterialsCategoriesStateModel>({
  name: 'materialsCategories',
  defaults: {
    materialsCategories: [],
    status: 'pending',
    error: null,
  },
})
@Injectable()
export class MaterialsCategoriesState {
  constructor(private sanity: SanityService) {
    this.lang$.subscribe((lang: string) => {
      this.lang = lang;
    });
  }
  @Select(GeneralState.getLang) lang$: Observable<string>;

  lang = '';

  @Selector()
  static getS(state: MaterialsCategoriesStateModel) {
    return state.materialsCategories;
  }

  @Action(FetchMaterialsCategories)
  fetchStylismServices(ctx: StateContext<MaterialsCategoriesStateModel>) {
    // Call the fetch products method and cancel if problem
    // image{"imageUrl": asset->url},
    return from(
      this.sanity.fetchQuerry(
        `*[_type == "materialsCategories" ]{
            _id,
           title{${this.lang}},
           materials[]->{
            mainImage{
                "imageUrl": asset->url
            },
            title{${this.lang}},
            tags[]->{
                title
                }
            }
          
          }`
      )
    ).pipe(
      // Take the returned value and return a new success action containing the products
      tap((materialsCategories) => {
        // puts in an array and take only the first element of it
        // bc even when i select only one element with sanity => returns an object but typecript doesnt recognize it.
        // force to create an array => then select only its first element
        ctx.dispatch(new FetchMaterialsCategoriesSuccess(materialsCategories));
      }),
      // Or... if it errors return a new failure action containing the error
      catchError((error) =>
        ctx.dispatch(new FetchMaterialsCategoriesFailure(error))
      )
    );
  }

  @Action(FetchMaterialsCategoriesSuccess)
  fetchMaterialsCategoriesSuccess(
    ctx: StateContext<MaterialsCategoriesStateModel>,
    { materialsCategories }: MaterialsCategoriesStateModel
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      materialsCategories: materialsCategories,
      status: 'success',
      error: null,
    });
  }

  @Action(FetchMaterialsCategoriesFailure)
  fetchStylismServicesFailure(
    ctx: StateContext<MaterialsCategoriesStateModel>
  ) {
    const state = ctx.getState();

    ctx.setState({
      ...state,
      status: 'failure',
      error: null,
    });
  }
}
