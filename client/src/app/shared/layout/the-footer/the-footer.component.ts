import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { ContactState } from '../../context/contact/contact.state';
import { Observable } from 'rxjs';
import { ContactData } from '../../context/contact/contact.model';
import { Store } from '@ngxs/store';
import { FectchContactData } from '../../context/contact/contact.actions';

@Component({
  selector: 'app-the-footer',
  templateUrl: './the-footer.component.html',
  styleUrls: ['./the-footer.component.css']
})
export class TheFooterComponent implements OnInit {

  constructor(public store:Store ) { }
  @Select(ContactState.getContactPageData) contactData$:Observable<ContactData>

    contactData:ContactData | null | undefined


  ngOnInit(): void {
    this.store.dispatch(new FectchContactData())
    this.contactData$.subscribe((data) => this.contactData = data)
  }

  handleClick(noScroll?: boolean) {
    if (noScroll) {
      return
    } else {
      window.scrollTo(0, 0);
    }
  }


  d = new Date()
  year = this.d.getFullYear()

}
