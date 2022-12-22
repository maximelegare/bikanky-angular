import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GeneralState } from './shared/context/general/general.state';
import { Select } from '@ngxs/store';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @Select(GeneralState.getSidebarOpen) sidebarOpen$: Observable<boolean>;

  sidebarOpen:boolean;
  
  ngOnInit(): void {
    this.sidebarOpen$.subscribe((sidebar) => {
      this.sidebarOpen = sidebar;
    });
  }
  
}
