import { TestBed } from '@angular/core/testing';

import { Team4ApiService } from './team4-api.service';

describe('Team4ApiService', () => {
  let service: Team4ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Team4ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
