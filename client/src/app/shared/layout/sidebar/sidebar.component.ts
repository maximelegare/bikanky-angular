import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToggleSideBarOpen } from '../../context/general/general.actions';
import { Observable } from 'rxjs';
import { GeneralState } from '../../context/general/general.state';
import { Select } from '@ngxs/store';
import { FectchContactData } from '../../context/contact/contact.actions';
import { FetchStylismServices } from '../../context/stylism/stylism.actions';
import { StylismServicesState } from '../../context/stylism/stylism.state';
import { ContactState } from '../../context/contact/contact.state';
import { StylismService } from '../../context/stylism/stylism.model';
import { ContactData } from '../../context/contact/contact.model';
import { FormatString } from '../../services/utils/format-string.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor(public store: Store, public formatString:FormatString) {}

  @Select(GeneralState.getSidebarOpen) sidebarOpen$: Observable<boolean>;
  @Select(StylismServicesState.getStylismServices) stylismServices$:Observable<StylismService[]>;
  @Select(ContactState.getContactPageData) contactData$:Observable<ContactData>;

  sidebarOpen:boolean

  ngOnInit(): void {
    this.store.dispatch(new FectchContactData())
    this.store.dispatch(new FetchStylismServices())
    this.sidebarOpen$.subscribe((sidebar) => {
      this.sidebarOpen = sidebar;
    });
  }

  handleClick() {
    this.store.dispatch(new ToggleSideBarOpen());
  }
}
