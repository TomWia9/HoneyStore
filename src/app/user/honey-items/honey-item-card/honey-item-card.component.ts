import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { Honey } from 'src/app/shared/honey';
import { HoneyInTheWarehouse } from 'src/app/shared/honeyInTheWarehouse';

@Component({
  selector: 'app-honey-item-card',
  templateUrl: './honey-item-card.component.html',
  styleUrls: ['./honey-item-card.component.css']
})
export class HoneyItemCardComponent implements OnInit {
  @Input() honey: HoneyInTheWarehouse;
  @Input() isLoggedIn: boolean;
  faShoppingCart = faShoppingCart;
  isCollapsed = true;

  constructor(private router: Router, private cartService: CartService, private authService: AuthService) { }

  ngOnInit(): void {
  }

  onAddToCart(honey) {

    if (!this.isLoggedIn) {
      this.router.navigate(['/login']);
    } else {
      const h: Honey = {id: honey.id, name: honey.name, amount: 1, price: honey.price };
      this.cartService.addToCart(h, this.authService.getCurrentUserValue().id).subscribe();
    }
  }

  createImgPath(serverPath: string){
    return `https://localhost:5001/${serverPath}`;
  }

}
