import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FectchHomeDataOtherCards } from 'src/app/shared/context/other-cards/other-cards.actions';
import { FectchProducts } from 'src/app/shared/context/products/products.actions';
import { FetchStylismServices } from 'src/app/shared/context/stylism/stylism.actions';
import * as AOS from 'aos'

@Component({
  selector: 'app-index',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(new FectchHomeDataOtherCards());
    this.store.dispatch(new FectchProducts('home'));
    this.store.dispatch(new FetchStylismServices())
    AOS.init({ easing: 'ease-in-out-back', startEvent:'load' });
  }
}
