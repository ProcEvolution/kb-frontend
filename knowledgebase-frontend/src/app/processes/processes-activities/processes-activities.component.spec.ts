import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessesActivitiesComponent } from './processes-activities.component';

describe('ProcessesActivitiesComponent', () => {
  let component: ProcessesActivitiesComponent;
  let fixture: ComponentFixture<ProcessesActivitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessesActivitiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessesActivitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
