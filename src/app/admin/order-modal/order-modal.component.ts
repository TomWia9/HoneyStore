import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../shared/order';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Address } from 'src/app/shared/address';
import { Client } from 'src/app/shared/client';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {

  @Input() order: Order;
  address: Address;
  client: Client;

  constructor(public activeModal: NgbActiveModal, private usersService: UsersService) {}
  ngOnInit(): void {
    this.usersService.GetClientAddress(this.order.clientId).subscribe(x => {
      this.address = x.body;
    })

    this.usersService.GetClient(this.order.clientId).subscribe(x => {
      this.client = x.body;
    })
  }

  onSend(){
    //ordersService.changeStatus(order.id, 'Shipped');
    console.log('Order shipped');
  }

}
