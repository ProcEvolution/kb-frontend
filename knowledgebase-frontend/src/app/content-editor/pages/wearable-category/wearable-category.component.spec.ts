import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearableCategoryComponent } from './wearable-category.component';

describe('WearableCategoryComponent', () => {
  let component: WearableCategoryComponent;
  let fixture: ComponentFixture<WearableCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WearableCategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WearableCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
