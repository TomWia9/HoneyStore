import { Injectable } from '@angular/core';
import { Honey } from '../shared/honey';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoneysService {

  constructor(private http: HttpClient) { }

  getHoneysList(): Observable<HttpResponse<Honey[]>>{
    return this.http.get<Honey[]>('https://localhost:5001/api/warehouse/getAllHoneys', {observe: 'response'});
  }

  addHoney(honey: Honey): Observable<HttpResponse<Honey>>{
    return this.http.post<Honey>('https://localhost:5001/api/cart/', honey, {observe: 'response'});
  }

}
