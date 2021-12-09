import { TestBed } from '@angular/core/testing';

import { WearableCategoryService } from './wearable-category.service';

describe('WearableCategoryService', () => {
  let service: WearableCategoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WearableCategoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
