import { Component, OnInit, Input } from '@angular/core';
import { Order } from 'src/app/shared/order';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdersService } from 'src/app/services/orders.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Status } from 'src/app/shared/status';
import { OrderModalComponent } from 'src/app/shared/order-modal/order-modal.component';
import { UsersService } from 'src/app/services/users.service';
import { Client } from 'src/app/shared/client';
import { Address } from 'src/app/shared/address';

@Component({
  selector: 'app-user-orders-table',
  templateUrl: './user-orders-table.component.html',
  styleUrls: ['./user-orders-table.component.css']
})
export class UserOrdersTableComponent implements OnInit {
  @Input() status: Status = Status.New;
  ordersList: Order[] = [];
  page = 1;
  pageSize = 4;
  collectionSize: number;
  faTable = faTable;
  clientId: number;

  constructor(private modalService: NgbModal, private ordersService: OrdersService, private authService: AuthService) {}

  ngOnInit(): void {

    this.clientId = this.authService.getCurrentUserValue().id;

    this.ordersService.getClientOrders(this.clientId, this.status).subscribe(x => {
      this.ordersList = x.body;
    });
    this.collectionSize = this.ordersList.length;
  }

  get orders(): Order[] {
    return this.ordersList
      .map((order, i) => ({id: i + 1, ...order}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  onOpen(order: Order) {
    const modalRef = this.modalService.open(OrderModalComponent, { size: 'xl', scrollable: true });
    modalRef.componentInstance.order = order;
  }
}
