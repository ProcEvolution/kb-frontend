import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WearablesOverviewComponent } from './wearables-overview.component';

describe('WearablesOverviewComponent', () => {
  let component: WearablesOverviewComponent;
  let fixture: ComponentFixture<WearablesOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WearablesOverviewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WearablesOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
