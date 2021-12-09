import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearablesResultsComponent } from './wearables-results.component';

describe('WearablesResultsComponent', () => {
  let component: WearablesResultsComponent;
  let fixture: ComponentFixture<WearablesResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WearablesResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WearablesResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
