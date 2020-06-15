import { Injectable } from '@angular/core';
import { Order } from '../shared/order';
import { CartService } from './cart.service';
import { Client } from '../shared/client';
import { Address } from '../shared/address';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private order: Order = new Order();
  address: Address = {city: 'Warsaw', street: 'Saint street 4', postCode: '00-000'}; //temp
  constructor(private cartService: CartService) { }
  client: Client = {firstName: 'Tomasz', lastName: 'Wiatrowski', email: 'tomaszwiatrowski9@gmail.com', address: this.address};

  addOrder(){
    this.order.status = 'New';
    //this.order.client = authService.getClient();
    this.order.client = this.client;
    this.order.products = this.cartService.getCart().honeys;
    this.order.totalPrice = this.cartService.getCart().totalPrice;
    this.order.payment = this.cartService.getCart().payment;
    this.order.date = new Date().toUTCString();
    console.log(this.order);
    
  }

  getOrder(){
    if (this.order !== null){
      return this.order;
    }
  }
}
