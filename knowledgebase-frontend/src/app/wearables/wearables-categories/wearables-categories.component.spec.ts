import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearablesCategoriesComponent } from './wearables-categories.component';

describe('WearablesCategoriesComponent', () => {
  let component: WearablesCategoriesComponent;
  let fixture: ComponentFixture<WearablesCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WearablesCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WearablesCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
