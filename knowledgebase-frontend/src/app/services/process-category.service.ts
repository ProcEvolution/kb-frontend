import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {ProcessCategory} from '../interfaces/process-category';
import {Process} from '../interfaces/process';

@Injectable({
  providedIn: 'root'
})
export class ProcessCategoryService {

  constructor(private httpClient: HttpClient) { }


  /************** Overall usable **************/

  findAll(): Observable<ProcessCategory[]> {
    return this.httpClient.get<ProcessCategory[]>(environment.backendUrl + '/public/processcategory');
  }

  findAllProcesses(processCategoryId: string): Observable<Process[]> {
    return this.httpClient.get<Process[]>(environment.backendUrl + '/public/processcategory/' + processCategoryId + '/process');
  }

  findById(id: string): Observable<ProcessCategory> {
    return this.httpClient.get<ProcessCategory>(environment.backendUrl + '/public/processcategory/' + id);
  }

  /************** Only in Conteneditor usable. JWT is automatically set **************/

  save(processCategory: ProcessCategory): Observable<ProcessCategory> {
    return this.httpClient.post<ProcessCategory>(environment.backendUrl + '/api/processcategory', processCategory);
  }

  deleteAll(ids: string[]): Observable<any> {
    console.log('deleteAll');
    console.dir(ids);
    return this.httpClient.post(environment.backendUrl + '/api/processcategory/delete', ids);
  }
}
