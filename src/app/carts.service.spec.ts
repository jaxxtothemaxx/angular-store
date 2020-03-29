import { TestBed } from '@angular/core/testing';

import { cartervice } from './cart.service';

describe('cartervice', () => {
  let service: cartervice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(cartervice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
