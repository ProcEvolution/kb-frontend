import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Process} from '../interfaces/process';
import {environment} from '../../environments/environment';
import {Interface} from '../interfaces/interface';

@Injectable({
  providedIn: 'root'
})
export class InterfaceService {

  constructor(private httpClient: HttpClient) {}

  /************** Overall usable **************/

  findAll(): Observable<Interface[]> {
    return this.httpClient.get<Interface[]>(environment.backendUrl + '/public/interface');
  }

  findById(id: string): Observable<Interface> {
    return this.httpClient.get<Interface>(environment.backendUrl + '/public/interface/' + id);
  }

  /************** Only in Conteneditor usable. JWT is automatically set **************/

  save(anInterface: Interface): Observable<Interface> {
    return this.httpClient.post<Interface>(environment.backendUrl + '/api/interface', anInterface);
  }

  deleteAll(ids: string[]): Observable<any> {
    console.log('deleteAll');
    console.dir(ids);
    return this.httpClient.post(environment.backendUrl + '/api/interface/delete', ids);
  }
}
