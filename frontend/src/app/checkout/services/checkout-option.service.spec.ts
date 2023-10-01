import { TestBed } from '@angular/core/testing';

import { CheckoutOptionService } from './checkout-option.service';

describe('CheckoutOptionService', () => {
  let service: CheckoutOptionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckoutOptionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
