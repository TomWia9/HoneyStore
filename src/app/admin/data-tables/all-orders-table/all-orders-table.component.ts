import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/order';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderModalComponent } from '../../order-modal/order-modal.component';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-all-orders-table',
  templateUrl: './all-orders-table.component.html',
  styleUrls: ['./all-orders-table.component.css'],
  providers: []
})
export class AllOrdersTableComponent implements OnInit {
  page = 1;
  pageSize = 4;
  faTable = faTable;
  ordersList: Order[] = [];
  collectionSize: number;

  constructor(private modalService: NgbModal, private ordersService: OrdersService){}

  ngOnInit(): void {

    this.ordersService.getOrders(true, 0).subscribe(x => {
      this.ordersList = x.body;
    })

    this.collectionSize = this.ordersList.length;

  }

  get orders(): Order[] {
    return this.ordersList
      .map((order, i) => ({id: i + 1, ...order}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  open(order: Order){
    const modalRef = this.modalService.open(OrderModalComponent, { size: 'xl', scrollable: true });
    modalRef.componentInstance.order = order;
  }
}
