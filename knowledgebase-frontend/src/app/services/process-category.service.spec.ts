import { TestBed } from '@angular/core/testing';

import { ProcessCategoryService } from './process-category.service';

describe('ProcessCategoryService', () => {
  let service: ProcessCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
