import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Feature} from '../interfaces/feature';

@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<Feature[]> {
    return this.httpClient.get<Feature[]>(environment.backendUrl + '/public/feature');
  }

  /*
  findById(id: string): Observable<Feature> {
    return this.httpClient.get<Feature>(environment.backendUrl + '/public/datatype/' + id);
  }

   */

  /************** Only in Conteneditor usable. JWT is automatically set **************/

  save(feature: Feature): Observable<Feature> {
    console.log('save me');
    console.dir(feature);
    return this.httpClient.post<Feature>(environment.backendUrl + '/api/feature', feature);
  }

  deleteAll(ids: string[]): Observable<any> {
    return this.httpClient.post(environment.backendUrl + '/api/feature/delete', ids);
  }
}
