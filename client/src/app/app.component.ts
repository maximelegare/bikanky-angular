import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralState } from './shared/context/general/general.state';
import { Select } from '@ngxs/store';
import { Store } from '@ngxs/store';

import * as AOS from "aos"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(public store:Store){
    
  }

  @Select(GeneralState.getSidebarOpen) sidebarOpen$: Observable<boolean>;
  

  sidebarOpen:boolean;
  
  ngOnInit(): void {
    this.sidebarOpen$.subscribe((sidebar) => {
      this.sidebarOpen = sidebar;
    });
    
  }  
  
  
}
