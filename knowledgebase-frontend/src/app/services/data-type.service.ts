import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {DataType} from '../interfaces/data-type';

@Injectable({
  providedIn: 'root'
})
export class DataTypeService {

  constructor(private httpClient: HttpClient) { }

  findAll(): Observable<DataType[]> {
    return this.httpClient.get<DataType[]>(environment.backendUrl + '/public/datatype');
  }

  findById(id: string): Observable<DataType> {
    return this.httpClient.get<DataType>(environment.backendUrl + '/public/datatype/' + id);
  }

  /************** Only in Conteneditor usable. JWT is automatically set **************/

  save(dataType: DataType): Observable<DataType> {
    return this.httpClient.post<DataType>(environment.backendUrl + '/api/datatype', dataType);
  }

  deleteAll(ids: string[]): Observable<any> {
    return this.httpClient.post(environment.backendUrl + '/api/datatype/delete', ids);
  }
}
