import { TestBed } from '@angular/core/testing';

import { CardTopCraftsmanService } from './card-top-craftsman.service';

describe('CardTopCraftsmanService', () => {
  let service: CardTopCraftsmanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CardTopCraftsmanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
