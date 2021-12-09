import { TestBed } from '@angular/core/testing';

import { ContentEditorInterceptor } from './content-editor.interceptor';

describe('ContentEditorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      ContentEditorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: ContentEditorInterceptor = TestBed.inject(ContentEditorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
