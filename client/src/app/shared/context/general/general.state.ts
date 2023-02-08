import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { from, tap, catchError } from 'rxjs';
import { ToggleSideBarOpen, CarouselSlidesPerView } from './general.actions';

interface GeneralStateModel {
  lang: string;
  sidebarOpen: boolean;
  // carouselSlidePerView: number | undefined;
}

@State<GeneralStateModel>({
  name: 'general',
  defaults: {
    lang: 'fr',
    sidebarOpen: false,
    // carouselSlidePerView: 3,
  },
})
@Injectable()
export class GeneralState {
  constructor() {}

  @Selector()
  static getLang(state: GeneralStateModel) {
    return state.lang;
  }

  // @Selector()
  // static carouselSlidePerView(state: GeneralStateModel) {
  //   return state.carouselSlidePerView;
  // }

  @Selector()
  static getSidebarOpen(state: GeneralStateModel) {
    return state.sidebarOpen;
  }

  // Toggle sidebarOpen
  @Action(ToggleSideBarOpen)
  toggleSideBarOpen(ctx: StateContext<GeneralStateModel>) {
    const state = ctx.getState();
    console.log('sidebar');
    ctx.setState({
      ...state,
      sidebarOpen: !state.sidebarOpen,
    });
  }

  @Action(CarouselSlidesPerView)
  carouselSlidesPerView(ctx: StateContext<GeneralStateModel>) {
    const state = ctx.getState();
    const screenWidth = window.screen.width;

    function getSlidesNumber() {
      if (screenWidth >= 1536) {
        return 5;
      } else if (screenWidth >= 1280) {
        return 4;
      } else if (screenWidth >= 1080) {
        return 3;
      } else if (screenWidth >= 1024) {
        return 3;
      } else if (screenWidth >= 768) {
        return 2;
      } else if (screenWidth >= 640) {
        return 1;
      } else {
        return 1;
      }
    }

    const numberOfSlides: number = getSlidesNumber();
    //     sm	640px	@media (min-width: 640px) { ... }
    // md	768px	@media (min-width: 768px) { ... }
    // lg	1024px	@media (min-width: 1024px) { ... }
    // xl	1280px	@media (min-width: 1280px) { ... }
    // 2xl	1536px

    // ctx.setState({
    //   ...state,
    //   carouselSlidePerView: numberOfSlides,
    // });
  }
}
