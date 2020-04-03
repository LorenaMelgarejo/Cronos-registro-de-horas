import { TestBed } from '@angular/core/testing';

import { UsApiService } from './us-api.service';

describe('UsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsApiService = TestBed.get(UsApiService);
    expect(service).toBeTruthy();
  });
});
