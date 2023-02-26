import { TestBed } from '@angular/core/testing';

import { AuthorOperationService } from './author-operation.service';

describe('AuthorOperationService', () => {
  let service: AuthorOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthorOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
