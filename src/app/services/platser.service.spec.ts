import { TestBed } from '@angular/core/testing';

import { PlatserService } from './platser.service';

describe('PlatserService', () => {
  let service: PlatserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
