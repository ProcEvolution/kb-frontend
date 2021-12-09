import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Activity} from '../interfaces/activity';
import {environment} from '../../environments/environment';
import {Result} from '../interfaces/result';
import {ActivityResult} from '../interfaces/activity-result';

@Injectable({
  providedIn: 'root'
})
export class ResultService {

  constructor(private httpClient: HttpClient) { }

  getResult(activities: string[]): Observable<Result> {
    return this.httpClient.post<Result>(environment.backendUrl + '/public/matching/actvitiy', activities);
  }

  getResultWearable(wearables: string[]): Observable<ActivityResult> {
    return this.httpClient.post<ActivityResult>(environment.backendUrl + '/public/matching/wearable', wearables);
  }
}
