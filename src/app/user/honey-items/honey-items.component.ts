import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Honey } from 'src/app/shared/honey';
import { CartService } from 'src/app/services/cart.service';
import { HoneysService } from 'src/app/services/honeys.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-honey-items',
  templateUrl: './honey-items.component.html',
  styleUrls: ['./honey-items.component.css']
})
export class HoneyItemsComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  honeys: Honey[] = [];
  isLoggedIn: boolean;

  constructor(private cartService: CartService, private honeysService: HoneysService, private authService: AuthService,
              private router: Router) { }

  ngOnInit(): void {
    this.honeysService.getHoneysList().subscribe(x => {
      this.honeys = x.body;
      console.log(x);
      
    });
    this.authService.currentUser.subscribe(x => {
      this.isLoggedIn = x !== null;
    });
  }

  onAddToCart(honey) {

    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    } else {
      const h: Honey = {id: honey.id, name: honey.name, amount: 1, price: honey.price };
      this.cartService.addToCart(h, this.authService.getCurrentUserValue().id).subscribe();
    }
  }

}
