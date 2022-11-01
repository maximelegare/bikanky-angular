import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FetchStylismServices } from '../shared/context/stylism/stylism.actions';

@Component({
  selector: 'app-stylism',
  templateUrl: './stylism.component.html',
  styleUrls: ['./stylism.component.css']
})
export class StylismComponent implements OnInit {

  constructor(public store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(new FetchStylismServices())

  }
}
