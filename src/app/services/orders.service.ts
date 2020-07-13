import { Injectable } from '@angular/core';
import { Order } from '../shared/order';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Status } from '../shared/status';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {

  constructor(private http: HttpClient) { }

  addOrder(order: Order): Observable<HttpResponse<Order>> {
    return this.http.post<Order>('https://localhost:5001/api/orders/newOrder', order, {observe: 'response'});
  }

  getOrder(orderId: number): Observable<HttpResponse<Order>> {
    return this.http.get<Order>(`https://localhost:5001/api/orders/getOrder/${orderId}`, {observe: 'response'});
  }

  getOrders(all: boolean, status: Status): Observable<HttpResponse<Order[]>> {
    return this.http.get<Order[]>(`https://localhost:5001/api/orders/getOrders/${all}/${status}`, {observe: 'response'});
  }

  getClientOrders(clientId: number, status: Status): Observable<HttpResponse<Order[]>> {
    return this.http.get<Order[]>(`https://localhost:5001/api/orders/getClientOrders/${clientId}/${status}`, {observe: 'response'});
  }

  cancelTheOrder(orderId: number): Observable<HttpResponse<any>>{
    return this.http.delete<any>(`https://localhost:5001/api/orders/cancelTheOrder/${orderId}`, {observe: 'response'});
  }
}
