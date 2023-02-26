import { TestBed } from '@angular/core/testing';

import { DataOperationsService } from './data-operations.service';

describe('DataOperationsService', () => {
  let service: DataOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
