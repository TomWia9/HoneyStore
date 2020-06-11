import { Component } from '@angular/core';
import { Order } from '../../../shared/order';
import { ORDERS } from '../orders/orders';
import { faTable } from '@fortawesome/free-solid-svg-icons';

const ORDERS_LIST = ORDERS;

@Component({
  selector: 'app-all-orders-table',
  templateUrl: './all-orders-table.component.html',
  styleUrls: ['./all-orders-table.component.css'],
  providers: []
})
export class AllOrdersTableComponent {
  page = 1;
  pageSize = 4;
  collectionSize = ORDERS_LIST.length;
  faTable = faTable;

  get orders(): Order[] {
    return ORDERS_LIST
      .map((order, i) => ({id: i + 1, ...order}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }
}
