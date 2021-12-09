import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {WearableCategory} from '../interfaces/wearable-category';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Wearable} from '../interfaces/wearable';

@Injectable({
  providedIn: 'root'
})
export class WearableService {

  constructor(private httpClient: HttpClient) { }

  /************** Overall usable **************/

  findAll(): Observable<Wearable[]> {
    return this.httpClient.get<Wearable[]>(environment.backendUrl + '/public/wearable');
  }

  findById(id: string): Observable<Wearable> {
    return this.httpClient.get<Wearable>(environment.backendUrl + '/public/wearable/' + id);
  }

  /************** Only in Conteneditor usable. JWT is automatically set **************/

  save(wearable: Wearable): Observable<Wearable> {
    return this.httpClient.post<Wearable>(environment.backendUrl + '/api/wearable', wearable);
  }

  uploadIcon(id: string, file: any): Observable<Wearable> {
    const formData = new FormData();
    formData.set('file', file);
    return this.httpClient.post<Wearable>(environment.backendUrl + '/api/wearable/' + id.trim() + '/icon', formData);
  }

  deleteAll(ids: string[]): Observable<any> {
    console.log('deleteAll');
    console.dir(ids);
    return this.httpClient.post(environment.backendUrl + '/api/wearable/delete', ids);
  }

}
