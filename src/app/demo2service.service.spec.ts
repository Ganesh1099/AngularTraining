import { TestBed } from '@angular/core/testing';

import { Demo2serviceService } from './demo2service.service';

describe('Demo2serviceService', () => {
  let service: Demo2serviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Demo2serviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
