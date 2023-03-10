import { TestBed } from '@angular/core/testing';

import { FormatString } from './format-string.service';

describe('FormatPhoneNumberService', () => {
  let service: FormatString;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormatString);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
