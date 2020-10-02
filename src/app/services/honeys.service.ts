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

  getHoney(honeyId): Observable<HttpResponse<Honey>>{
    return this.http.get<Honey>(`https://localhost:5001/api/warehouse/getHoney/${honeyId}`, {observe: 'response'});
  }

  addHoney(honey: Honey): Observable<HttpResponse<Honey>>{
    return this.http.post<Honey>('https://localhost:5001/api/warehouse/addHoney', honey, {observe: 'response'});
  }

  removeHoney(honeyId: number): Observable<HttpResponse<any>>{
    return this.http.delete<any>(`https://localhost:5001/api/warehouse/removeHoney/${honeyId}`, {observe: 'response'});
  }

}
