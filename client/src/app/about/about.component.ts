import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import { Store } from '@ngxs/store';
import { FectchAboutData } from '../shared/context/about/about.actions';

import { Select } from '@ngxs/store';
import { AboutState } from '../shared/context/about/about.state';
import { Observable } from 'rxjs';
import { AboutData } from '../shared/context/about/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {
  constructor(private store: Store) {}

  @Select(AboutState.getAboutPageData) aboutData$: Observable<AboutData>;

  ngOnInit(): void {
    this.store.dispatch(new FectchAboutData());

    this.aboutData$.subscribe((val) =>{
      console.log(val)
    })

    AOS.init({ easing: 'ease-in-out-back', startEvent: 'load' });
  }
}
