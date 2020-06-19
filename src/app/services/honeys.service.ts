import { Injectable } from '@angular/core';
import { Honey } from '../shared/honey';

@Injectable({
  providedIn: 'root'
})
export class HoneysService {

  private  honeys: Honey[] = [
    {id: 1, name: 'Acacia Honey', amount: 1000, price: 30},
    {id: 2, name: 'Avocado Honey', amount: 500, price: 40},
    {id: 3, name: 'Basswood Honey', amount: 300, price: 35},
    {id: 4, name: 'Blueberry Honey', amount: 99, price: 33},
  ];


  constructor() { }

  getHoneysList(){
    console.log(this.honeys);
    
    return this.honeys;
  }

  addHoney(honey: Honey){
    console.log(honey);
    
    this.honeys.push(honey);
  }


}
