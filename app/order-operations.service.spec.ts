import { TestBed } from '@angular/core/testing';

import { OrderOperationsService } from './order-operations.service';

describe('OrderOperationsService', () => {
  let service: OrderOperationsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrderOperationsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
