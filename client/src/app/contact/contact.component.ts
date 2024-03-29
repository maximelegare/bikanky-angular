import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { FectchContactData } from '../shared/context/contact/contact.actions';
import { ContactState } from '../shared/context/contact/contact.state';
import { Observable } from 'rxjs';
import { ContactData } from '../shared/context/contact/contact.model';
import * as AOS from 'aos'
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public store:Store) { }
  @Select(ContactState.getContactPageData) contactData$:Observable<ContactData>
  
    
  ngOnInit(): void {
    this.store.dispatch(new FectchContactData())
    AOS.init({ easing: 'ease-in-out-back', startEvent: 'load' });
  }

}
