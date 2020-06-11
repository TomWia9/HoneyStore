import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../shared/order';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent {

  @Input() order: Order;

  constructor(public activeModal: NgbActiveModal) {}

}
