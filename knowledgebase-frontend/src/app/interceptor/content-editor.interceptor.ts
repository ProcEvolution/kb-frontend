import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable()
export class ContentEditorInterceptor implements HttpInterceptor {

  constructor() {}

  private static isValidRequestForInterceptor(requestUrl: string): boolean {
    const positionIndicator = 'api/';
    const urlsToNotUse = environment.excludeBearerTokenURLs;
    const position = requestUrl.indexOf(positionIndicator);
    if (position > 0) {
      const destination: string = requestUrl.substr(position + positionIndicator.length);
      for (const address of urlsToNotUse) {
        if (new RegExp(address).test(destination)) {
          return false;
        }
      }
    }
    return true;
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
      if (ContentEditorInterceptor.isValidRequestForInterceptor(request.url)) {
          const token = localStorage.getItem('access_token');
          const modifiedRequest = request.clone({
              setHeaders: {
                  Authorization: 'Bearer ' + token
              }
          });
          return next.handle(modifiedRequest);
      }
      return next.handle(request);
  }
}
