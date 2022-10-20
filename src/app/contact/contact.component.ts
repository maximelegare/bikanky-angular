import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { FectchContactData } from '../shared/context/contact/contact.actions';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(public store:Store) { }

  ngOnInit(): void {
    this.store.dispatch(new FectchContactData())
  }

}
