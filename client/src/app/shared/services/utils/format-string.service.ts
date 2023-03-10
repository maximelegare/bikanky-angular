import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FormatString {
  constructor() {}

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
}
