import { Injectable } from '@angular/core';
import { Cart } from '../shared/cart';
import { Payment } from '../shared/payment';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = {
    id: 1,
      honeys: [
      {id: 1, name: 'Acacia Honey', amount: 1, price: 30},
      {id: 2, name: 'Avocado Honey', amount: 2, price: 40},
      {id: 3, name: 'Basswood Honey', amount: 3, price: 35},
      {id: 4, name: 'Blueberry Honey', amount: 1, price: 33},
    ],
    totalPrice: 0,
    payment: null,
  }

  constructor() { }

  getCart(){
    return this.cart;
  }

  addToCart(){

  }

  updateCart(cart: Cart){
    console.log(cart.totalPrice);
    
    this.cart = cart;
  }

  addPayment(payment: Payment){
    this.cart.payment = payment;
  }
}
