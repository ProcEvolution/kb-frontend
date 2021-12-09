import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Activity} from '../interfaces/activity';

@Injectable({
  providedIn: 'root'
})
export class ActivityService {

  constructor(private httpClient: HttpClient) { }

  /************** Overall usable **************/

  findAll(): Observable<Activity[]> {
    return this.httpClient.get<Activity[]>(environment.backendUrl + '/public/activity');
  }

  findById(id: string): Observable<Activity> {
    return this.httpClient.get<Activity>(environment.backendUrl + '/public/activity/' + id);
  }

  /************** Only in Conteneditor usable. JWT is automatically set **************/

  save(activity: Activity): Observable<Activity> {
    console.log('Save Activity');
    console.dir(activity);
    return this.httpClient.post<Activity>(environment.backendUrl + '/api/activity', activity);
  }

  deleteAll(ids: string[]): Observable<any> {
    return this.httpClient.post(environment.backendUrl + '/api/activity/delete', ids);
  }
}
