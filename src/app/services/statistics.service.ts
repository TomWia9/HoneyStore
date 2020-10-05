import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberOfOrdersData } from '../shared/numberOfOrdersData';

@Injectable({
  providedIn: 'root'
})
export class StatisticsService {

  constructor(private htpp: HttpClient) { }

  getChartData(peroid: number): Observable<HttpResponse<NumberOfOrdersData>>{
    return this.htpp.get<NumberOfOrdersData>(`https://localhost:5001/api/statistics/getNumberOfOrdersData/${peroid}`, {observe: 'response'});
  }

  getNumberOfSpecyficOrdersData(peroid: number): Observable<HttpResponse<NumberOfOrdersData>>{
    return this.htpp.get<NumberOfOrdersData>(`https://localhost:5001/api/statistics/getNumberOfSpecyficOrdersData/${peroid}`, {observe: 'response'});
  }





}
