import { TestBed } from '@angular/core/testing';

import { SearchDataTransferService } from './search-data-transfer.service';

describe('DummyService', () => {
  let service: SearchDataTransferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchDataTransferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
