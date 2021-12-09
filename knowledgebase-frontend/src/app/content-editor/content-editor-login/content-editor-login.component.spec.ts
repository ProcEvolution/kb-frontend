import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentEditorLoginComponent } from './content-editor-login.component';

describe('ContentEditorLoginComponent', () => {
  let component: ContentEditorLoginComponent;
  let fixture: ComponentFixture<ContentEditorLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentEditorLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentEditorLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
