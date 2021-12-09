import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessCategoriesComponent } from './process-categories.component';

describe('ProcessCategoriesComponent', () => {
  let component: ProcessCategoriesComponent;
  let fixture: ComponentFixture<ProcessCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
