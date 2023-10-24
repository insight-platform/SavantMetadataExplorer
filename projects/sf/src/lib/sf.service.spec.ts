import { TestBed } from '@angular/core/testing';

import { SfService } from './sf.service';

describe('SfService', () => {
  let service: SfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
