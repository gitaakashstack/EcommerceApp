import { TestBed } from '@angular/core/testing';

import { SlotManagementService } from './slot-management.service';

describe('SlotManagementService', () => {
  let service: SlotManagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlotManagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
