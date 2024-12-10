import { TestBed } from '@angular/core/testing';

import { SearchBarTextService } from './search-bar-text.service';

describe('SearchBarTextService', () => {
  let service: SearchBarTextService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchBarTextService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
