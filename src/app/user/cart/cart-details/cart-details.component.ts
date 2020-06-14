import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/shared/cart';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  
  faTrash = faTrash;
  cart: Cart = {id: 1,  honeys: [
    {id: 1, name: 'Acacia Honey', amount: 1000, price: 30},
    {id: 2, name: 'Avocado Honey', amount: 500, price: 40},
    {id: 3, name: 'Basswood Honey', amount: 300, price: 35},
    {id: 4, name: 'Blueberry Honey', amount: 99, price: 33},
  ]}

  constructor() { }

  ngOnInit(): void {
    // cart = cartService.getCart();
  }

  onDelete(honeyID: number){
    console.log(honeyID);
    
  }

}
