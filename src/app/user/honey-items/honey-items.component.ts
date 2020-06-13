import { Component, OnInit } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Honey } from 'src/app/shared/honey';

@Component({
  selector: 'app-honey-items',
  templateUrl: './honey-items.component.html',
  styleUrls: ['./honey-items.component.css']
})
export class HoneyItemsComponent implements OnInit {

  faShoppingCart = faShoppingCart;
  honeys: Honey[] = [
    {id: 1, name: 'Acacia Honey', amount: 1000, price: 30},
    {id: 2, name: 'Avocado Honey', amount: 500, price: 40},
    {id: 3, name: 'Basswood Honey', amount: 300, price: 35},
    {id: 4, name: 'Blueberry Honey', amount: 99, price: 33},
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(honey){
    console.log(honey);
    
  }

}
