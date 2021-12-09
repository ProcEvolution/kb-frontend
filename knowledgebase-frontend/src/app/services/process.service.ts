import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Process} from '../interfaces/process';

@Injectable({
  providedIn: 'root'
})
export class ProcessService {

  constructor(private httpClient: HttpClient) { }

  /************** Overall usable **************/

  findAll(): Observable<Process[]> {
    return this.httpClient.get<Process[]>(environment.backendUrl + '/public/process');
  }

  findById(id: string): Observable<Process> {
    return this.httpClient.get<Process>(environment.backendUrl + '/public/process/' + id);
  }

  /************** Only in Conteneditor usable. JWT is automatically set **************/

  save(process: Process): Observable<Process> {
    console.log('save process');
    console.dir(process);
    return this.httpClient.post<Process>(environment.backendUrl + '/api/process', process);
  }

  deleteAll(ids: string[]): Observable<any> {
    console.log('deleteAll');
    console.dir(ids);
    return this.httpClient.post(environment.backendUrl + '/api/process/delete', ids);
  }
}
