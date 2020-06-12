import { Component, OnInit } from '@angular/core';
import { Honey } from '../../../shared/honey';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HoneyModalComponent } from '../../honey-modal/honey-modal.component';


@Component({
  selector: 'app-honey-cards',
  templateUrl: './honey-cards.component.html',
  styleUrls: ['./honey-cards.component.css']
})
export class HoneyCardsComponent implements OnInit {

  faAngleRight = faAngleRight;

  honeys: Honey[] = [
    {id: 1, name: 'Acacia Honey', amount: 1000, price: 30},
    {id: 2, name: 'Avocado Honey', amount: 500, price: 40},
    {id: 3, name: 'Basswood Honey', amount: 300, price: 35},
    {id: 4, name: 'Blueberry Honey', amount: 99, price: 33},
  ];

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  open(honey: Honey) {
    const modalRef = this.modalService.open(HoneyModalComponent);
    modalRef.componentInstance.honeyName = honey.name;
    modalRef.componentInstance.amount = honey.amount;
    modalRef.componentInstance.price = honey.price;
  }

}
