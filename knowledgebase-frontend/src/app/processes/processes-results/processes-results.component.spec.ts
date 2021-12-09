import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessesResultsComponent } from './processes-results.component';

describe('ProcessesResultsComponent', () => {
  let component: ProcessesResultsComponent;
  let fixture: ComponentFixture<ProcessesResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessesResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
