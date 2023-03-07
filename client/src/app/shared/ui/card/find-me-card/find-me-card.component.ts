import { Component, OnInit, Input } from '@angular/core';
import { FindMeLocations } from 'src/app/shared/context/other-cards/other-cards.model';
@Component({
  selector: 'app-find-me-card',
  templateUrl: './find-me-card.component.html',
  styleUrls: ['./find-me-card.component.css'],
})
export class FindMeCardComponent implements OnInit {
  constructor() {}

  @Input() location: FindMeLocations;

  formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
    var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
    if (match) {
      var intlCode = match[1] ? '+1 ' : '';
      return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
    }
    return null;
  }

  formatAddress(address) {
    return `${address.street}, ${address.city}, ${
      address.state
    } ${address.postalCode.toUpperCase()}, ${address.country}`;
  }

  ngOnInit(): void {}
}
