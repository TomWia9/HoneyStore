import { Injectable } from '@angular/core';
import { Cart } from '../shared/cart';
import { Payment } from '../shared/payment';
import { Honey } from '../shared/honey';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private isLoggedIn: boolean;

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
  };

  constructor(private authService: AuthService) {
     this.authService.isLoggedIn.subscribe(x => {
      this.isLoggedIn = x;
    });
   }

  getCart() {

    console.log(this.isLoggedIn);


    if (!this.isLoggedIn) {

      let localCart: Cart = {
        id: 0,
          honeys: JSON.parse(localStorage.getItem('cart')),
        totalPrice: this.cart.totalPrice,
        payment: null,
      };

      // this.cart.honeys = JSON.parse(localStorage.getItem('cart'));
      return localCart;
    }

    return this.cart; // in the future it will be http request
  }

  addToCart(honey: Honey) {
    let inCart = false;

    if (!this.isLoggedIn) {
      let honeysInLocalStorage = JSON.parse(localStorage.getItem('cart'));
      if (honeysInLocalStorage === null) {
      honeysInLocalStorage = [];
    }

      honeysInLocalStorage.forEach(honeyInLocalStorage => {
      if (honey.id === honeyInLocalStorage.id) {
        inCart = true;
        honeyInLocalStorage.amount++;
      }
    });
      if (!inCart) {
      honeysInLocalStorage.push(honey);
    }

      localStorage.setItem('cart', JSON.stringify(honeysInLocalStorage));
    } else {
      if (this.cart.honeys === null) {
        this.cart.honeys = [honey];
      } else {
        this.cart.honeys.forEach(honeyInCart => {
          if (honey.id === honeyInCart.id) {
            inCart = true;
            honeyInCart.amount++;
          }
        });
        if (!inCart) {
          this.cart.honeys.push(honey);
        }
      }
    }

  }

  updateCart(cart: Cart) {
    if (!this.isLoggedIn) {
      localStorage.setItem('cart', JSON.stringify(cart.honeys));
    } else {
      this.cart = cart;
    }
  }

  addPayment(payment: Payment) {
    this.cart.payment = payment;
  }

  deleteHoneyFromCart(index: number) {
    if (!this.isLoggedIn) {
      const honeysInLocalStorage = JSON.parse(localStorage.getItem('cart'));
      honeysInLocalStorage.splice(index, 1);
      localStorage.setItem('cart', JSON.stringify(honeysInLocalStorage));

    } else {
  this.cart.honeys.splice(index, 1);

}

  }
}
