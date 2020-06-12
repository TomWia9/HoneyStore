import { Component, OnInit } from '@angular/core';
import { Order } from '../../../shared/order';
import { ORDERS } from '../orders/orders';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrderModalComponent } from '../../order-modal/order-modal.component';

const ORDERS_LIST = ORDERS;

@Component({
  selector: 'app-all-orders-table',
  templateUrl: './all-orders-table.component.html',
  styleUrls: ['./all-orders-table.component.css'],
  providers: []
})
export class AllOrdersTableComponent implements OnInit {
  page = 1;
  pageSize = 4;
  collectionSize = ORDERS_LIST.length;
  faTable = faTable;

  constructor(private modalService: NgbModal){}

  ngOnInit(): void {
    ORDERS_LIST.forEach(order => {
      order.products.forEach(product => {
        order.totalCost += product.price;
      });
    });
  }

  get orders(): Order[] {
    return ORDERS_LIST
      .map((order, i) => ({id: i + 1, ...order}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  open(order: Order){
    const modalRef = this.modalService.open(OrderModalComponent, { size: 'xl', scrollable: true });
    modalRef.componentInstance.order = order;
  }
}
