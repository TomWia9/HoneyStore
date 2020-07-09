import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Honey } from 'src/app/shared/honey';
import { CartService } from 'src/app/services/cart.service';
import { HoneysService } from 'src/app/services/honeys.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-honey-items',
  templateUrl: './honey-items.component.html',
  styleUrls: ['./honey-items.component.css']
})
export class HoneyItemsComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  honeys: Honey[] = [];

  constructor(private cartService: CartService, private honeysService: HoneysService, private authService: AuthService) { }

  ngOnInit(): void {
    this.honeysService.getHoneysList().subscribe(x => {
      this.honeys = x.body;
    });
  }

  onAddToCart(honey) {

     const h: Honey = {id: honey.id, name: honey.name, amount: 1, price: honey.price };
     console.log(h);

     this.cartService.addToCart(h, this.authService.getCurrentUserValue().id).subscribe();

  }

}
