import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {WearableCategory} from '../interfaces/wearable-category';
import {environment} from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class WearableCategoryService {

    constructor(private httpClient: HttpClient) {
    }

    /************** Overall usable **************/

    findAll(): Observable<WearableCategory[]> {
        return this.httpClient.get<WearableCategory[]>(environment.backendUrl + '/public/wearablecategory');
    }

    findById(id: string): Observable<WearableCategory> {
        return this.httpClient.get<WearableCategory>(environment.backendUrl + '/public/wearablecategory/' + id);
    }

    /************** Only in Conteneditor usable. JWT is automatically set **************/

    save(wearableCategory: WearableCategory): Observable<WearableCategory> {
        return this.httpClient.post<WearableCategory>(environment.backendUrl + '/api/wearablecategory', wearableCategory);
    }

    uploadIcon(id: string, file: any): Observable<WearableCategory> {
        const formData = new FormData();
        formData.set('file', file);
        return this.httpClient.post<WearableCategory>(environment.backendUrl + '/api/wearablecategory/' + id.trim() + '/icon', formData);
    }

    deleteAll(ids: string[]): Observable<any> {
        console.log('deleteAll');
        console.dir(ids);
        return this.httpClient.post(environment.backendUrl + '/api/wearablecategory/delete', ids);
    }
}
