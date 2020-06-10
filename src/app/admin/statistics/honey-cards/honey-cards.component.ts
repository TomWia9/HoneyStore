import { Component, OnInit } from '@angular/core';
import { Honey } from './honey';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-honey-cards',
  templateUrl: './honey-cards.component.html',
  styleUrls: ['./honey-cards.component.css']
})
export class HoneyCardsComponent implements OnInit {

  faAngleRight = faAngleRight;

  honeys: Honey[] = [
    {id: 1, name: 'Acacia Honey', amount: 1000},
    {id: 2, name: 'Avocado Honey', amount: 500},
    {id: 3, name: 'Basswood Honey', amount: 300},
    {id: 4, name: 'Blueberry Honey', amount: 99},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
