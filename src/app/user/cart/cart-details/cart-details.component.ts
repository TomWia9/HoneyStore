import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/cart';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  faTrash = faTrash;
  cart: Cart;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
    this.cart.honeys.forEach(honey => {
      this.cart.totalPrice += honey.amount * honey.price;
    });
    this.cartService.updateCart(this.cart);
  }

  onDelete(honeyID: number){
    console.log(this.cart.id + honeyID);
    //remove from items from this ^ cart, then update cart in the service
    //this.cartService.updateCart(this.cart)
    
  }

  onChange(){
  this.cart.totalPrice = 0;
  this.cart.honeys.forEach(honey => {
      this.cart.totalPrice += honey.amount * honey.price;
    })
    console.log('in cartDetails: ' + this.cart.totalPrice);
    
  this.cartService.updateCart(this.cart);
  }

}
