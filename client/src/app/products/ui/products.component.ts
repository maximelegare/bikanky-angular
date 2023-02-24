import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FectchProducts } from 'src/app/shared/context/products/products.actions';

import * as AOS from 'aos'

@Component({
  selector: 'app-index',
  templateUrl: "./products.component.html",
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(public store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(new FectchProducts('all-products'))
    AOS.init({ easing: 'ease-in-out-back', startEvent:'load' });
  }
}
