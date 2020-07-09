import { Injectable } from '@angular/core';
import { Order } from '../shared/order';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<HttpResponse<Order>> {
    return this.http.post<Order>('https://localhost:5001/api/ordes/newOrder', order, {observe: 'response'});
  }

  getOrder(orderId: number): Observable<HttpResponse<Order>> {
    return this.http.get<Order>(`https://localhost:5001/api/orders/getOrder/${orderId}`, {observe: 'response'});
  }

  getOrders(all: boolean, status: number): Observable<HttpResponse<Order[]>>{
    return this.http.get<Order[]>(`https://localhost:5001/api/orders/getOrders/${all}/${status}`, {observe: 'response'});
  }
}
