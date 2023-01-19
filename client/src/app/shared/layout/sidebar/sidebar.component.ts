import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleSideBarOpen } from '../../context/general/general.actions';
import { Observable } from 'rxjs';
import { GeneralState } from '../../context/general/general.state';
import { Select } from '@ngxs/store';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(public store: Store) {}

  @Select(GeneralState.getSidebarOpen) sidebarOpen$: Observable<boolean>;


  sidebarOpen:boolean



  ngOnInit(): void {
    this.sidebarOpen$.subscribe((sidebar) => {
      this.sidebarOpen = sidebar;
    });
  }

  handleClick() {
    this.store.dispatch(new ToggleSideBarOpen());
  }
}
