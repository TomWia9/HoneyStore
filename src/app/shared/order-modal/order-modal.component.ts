import { Component, OnInit, Input } from '@angular/core';
import { Order } from '../../shared/order';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Delivery } from '../delivery';
import { Payment } from '../payment';
import { OrdersService } from 'src/app/services/orders.service';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-order-modal',
  templateUrl: './order-modal.component.html',
  styleUrls: ['./order-modal.component.css']
})
export class OrderModalComponent implements OnInit {

  @Input() order: Order;
  delivery;
  payment;
  admin = false;

  constructor(public activeModal: NgbActiveModal, private ordersService: OrdersService, private usersService: UsersService,
              private router: Router, private authService: AuthService) {}
  ngOnInit(): void {
    this.delivery = Delivery[this.order.delivery];
    this.payment = Payment[this.order.payment];
    this.admin = this.authService.getCurrentUserValue().email === 'admin@admin';
  }

  // only admin when status of order is new
  onSend() {
     this.ordersService.sendTheOrder(this.order.id).subscribe();
     this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/admin/orders']);
    });
    this.activeModal.close();
  }

  //only user when order is not shipped yet (when status is new)
  onCancel() {
    console.log('order, ', + this.order.id + ' canceled');
    this.ordersService.cancelTheOrder(this.order.id).subscribe();
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/account']);
    });
    this.activeModal.close();
  }

  //only user when shipped
  onConfirmDelivery() {
    this.ordersService.confirmDelivery(this.order.id).subscribe();
    this.router.navigateByUrl('/RefreshComponent', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/account']);
    });
    this.activeModal.close();
 }

}
