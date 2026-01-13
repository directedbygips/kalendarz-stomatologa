import { TestBed } from '@angular/core/testing';

import { Wizyty } from './wizyty';

describe('Wizyty', () => {
  let service: Wizyty;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Wizyty);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
