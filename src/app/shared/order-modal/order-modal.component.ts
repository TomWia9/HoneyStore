import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../shared/order';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address } from 'src/app/shared/address';
import { Client } from 'src/app/shared/client';
import { Delivery } from '../delivery';
import { Payment } from '../payment';
import { OrdersService } from 'src/app/services/orders.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {

  @Input() order: Order;
  @Input() address: Address;
  @Input() client: Client;
  delivery;
  payment;

  constructor(public activeModal: NgbActiveModal, private ordersService: OrdersService, private router: Router) {}
  ngOnInit(): void {
    this.delivery = Delivery[this.order.delivery];
    this.payment = Payment[this.order.payment];
  }

  // only admin
  onSend() {
    // ordersService.changeStatus(order.id, 'Shipped');
    console.log('Order shipped');
  }

  onCancel() {
    console.log('order, ', + this.order.id + ' canceled');
    this.ordersService.cancelTheOrder(this.order.id).subscribe(x => {
      console.log(x);
    });
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/account']);
  }); 
    this.activeModal.close();


  }

}
