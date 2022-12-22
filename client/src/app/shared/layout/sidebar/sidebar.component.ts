import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleSideBarOpen } from '../../context/general/general.actions';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(public store:Store) { }

  ngOnInit(): void {
  }

  handleClick(){
    this.store.dispatch(new ToggleSideBarOpen())
  }
}
