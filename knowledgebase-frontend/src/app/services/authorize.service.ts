import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Authorize} from '../interfaces/authorize';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AuthorizeService {

  constructor(private httpClient: HttpClient) { }

  /************** Overall usable **************/

  login(email: string, password: string): Observable<Authorize> {
    const payload = new HttpParams()
        .set('email', email)
        .set('password', password);
    return this.httpClient.post<Authorize>(environment.backendUrl + '/public/authorize', payload, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
}
