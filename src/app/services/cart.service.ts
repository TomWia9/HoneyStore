import { Injectable } from '@angular/core';
import { Cart } from '../shared/cart';
import { Honey } from '../shared/honey';
import { AuthService } from '../auth/auth.service';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) {}

  getCart(clientId: number): Observable<HttpResponse<Cart>> {
    return this.http.get<Cart>(`https://localhost:5001/api/carts/getCart/${clientId}`
    , {observe: 'response'});
  }

  addToCart(honey: Honey, clientId: number): Observable<HttpResponse<Honey>> {
        return this.http.post<Honey>(`https://localhost:5001/api/carts/addToCart/${clientId}`,
               honey, {observe: 'response'});
  }

  deleteHoneyFromCart(honeyName: string, clientId: number): Observable<HttpResponse<any>> {
   return this.http.delete<any>(`https://localhost:5001/api/carts/removeItemFromCart/${honeyName}/${clientId}`, {observe: 'response'});
  }

  updateCart(honey: Honey, clientId: number): Observable<HttpResponse<any>> {
    return this.http.patch<any>(`https://localhost:5001/api/carts/updateCart/${clientId}`, honey, {observe: 'response'});
   }

   isEmpty(clientId: number): Observable<HttpResponse<boolean>>{
    return this.http.get<boolean>(`https://localhost:5001/api/carts/isEmpty/${clientId}`, {observe: 'response'});
   }
}
