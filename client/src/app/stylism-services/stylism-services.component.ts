import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { StylismService } from '../shared/context/stylism/stylism.model';
import {Observable} from "rxjs" 
import { StylismServicesState } from '../shared/context/stylism/stylism.state';
import { Store } from '@ngxs/store';
import { FetchStylismServices } from '../shared/context/stylism/stylism.actions';

@Component({
  selector: 'app-stylism-services',
  templateUrl: './stylism-services.component.html',
  styleUrls: ['./stylism-services.component.css']
})
export class StylismServicesComponent implements OnInit {

  constructor(public store:Store) { }
  @Select(StylismServicesState.getStylismServices) stylismServices$:Observable<StylismService[]>

  ngOnInit(): void {
    this.store.dispatch(new FetchStylismServices())
    this.stylismServices$.subscribe((services) => {
      console.log(services)
    })
  }
}
