import { Component } from '@angular/core';
import { Order } from './orders/order';
import { ORDERS } from './orders/orders';
import { faTable } from '@fortawesome/free-solid-svg-icons';

const ORDERS_LIST = ORDERS;

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
  providers: []
})
export class DataTableComponent {
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
