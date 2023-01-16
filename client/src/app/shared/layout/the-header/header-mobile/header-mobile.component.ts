import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleSideBarOpen } from 'src/app/shared/context/general/general.actions';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.css']
})
export class HeaderMobileComponent implements OnInit {

  constructor(public store:Store) { }

  ngOnInit(): void {
  }

  handleSidebarClick(){
    this.store.dispatch(new ToggleSideBarOpen())
  }
}
