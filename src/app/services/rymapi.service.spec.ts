import { TestBed } from '@angular/core/testing';

import { RYMApiService } from './rymapi.service';

describe('RYMApiService', () => {
  let service: RYMApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RYMApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
