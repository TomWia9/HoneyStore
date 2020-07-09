import { Component, OnInit, Input } from '@angular/core';
import { Cart } from 'src/app/shared/cart';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { CartService } from 'src/app/services/cart.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Honey } from 'src/app/shared/honey';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  faTrash = faTrash;
  cart: Cart = new Cart();
  @Input() mini = false;
  isLoggedIn: boolean;
  empty = false;
  totalPrice = 0;
  userId: number;

  constructor(private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.currentUser.subscribe(x => {
      this.isLoggedIn = x !== null;
    });

    if (this.isLoggedIn) {
      this.userId = this.authService.getCurrentUserValue().id;
      this.getCart();
    }
  }

  getCart() {
    this.cartService.getCart(this.userId).subscribe(x => {
      this.cart = x.body;
      this.totalPrice = 0;
      if (x.body.honeys !== null) {
        x.body.honeys.forEach(honey => {
          this.totalPrice += honey.amount * honey.price;
        });

        if (x.body.honeys.length === 0) {
          this.empty = true;
        }

      } else {
        this.empty = true;
      }
    });
  }

  onDelete(honeyName: string) {
    this.cartService.deleteHoneyFromCart(honeyName, this.userId).subscribe(() => {
      this.getCart();
    }
    );
  }

  onChange(honey: Honey) {
    this.cartService.updateCart(honey, this.userId).subscribe();

    this.totalPrice = 0;
    this.cart.honeys.forEach(honeyItem => {
      this.totalPrice += honeyItem.amount * honeyItem.price;
    });

  }

}
