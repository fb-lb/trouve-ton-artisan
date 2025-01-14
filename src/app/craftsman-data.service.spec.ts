import { TestBed } from '@angular/core/testing';

import { CraftsmanDataService } from './craftsman-data.service';

describe('CardTopCraftsmanService', () => {
  let service: CraftsmanDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CraftsmanDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
