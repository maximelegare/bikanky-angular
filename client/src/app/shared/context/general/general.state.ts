import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { from, tap, catchError } from 'rxjs';
import { ToggleSideBarOpen, CarouselSlidesPerView } from './general.actions';

interface GeneralStateModel {
  lang: string;
  sidebarOpen: boolean;
}

@State<GeneralStateModel>({
  name: 'general',
  defaults: {
    lang: 'fr',
    sidebarOpen: false,
  },
})
@Injectable()
export class GeneralState {
  constructor() {}

  @Selector()
  static getLang(state: GeneralStateModel) {
    return state.lang;
  }

  @Selector()
  static getSidebarOpen(state: GeneralStateModel) {
    return state.sidebarOpen;
  }

  // Toggle sidebarOpen
  @Action(ToggleSideBarOpen)
  toggleSideBarOpen(ctx: StateContext<GeneralStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      sidebarOpen: !state.sidebarOpen,
    });
  }

}
