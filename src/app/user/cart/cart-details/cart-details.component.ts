import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/shared/cart';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  faTrash = faTrash;
  cart: Cart;
  @Input() mini = false;
  isLoggedIn: boolean;


  constructor(private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(x => {
      this.isLoggedIn = x;
    })
    this.cart = this.cartService.getCart();
    this.cart.totalPrice = 0;
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
