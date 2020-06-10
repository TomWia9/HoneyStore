import { Component, OnInit, Input } from '@angular/core';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { ORDERS } from '../orders/orders';
import { Order } from '../orders/order';

const ORDERS_LIST = ORDERS;

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit{
  @Input() status: string;
  ordersList: Order[] = [];

  page = 1;
  pageSize = 4;
  collectionSize: number;
  faTable = faTable;

  ngOnInit(): void {
    ORDERS_LIST.forEach(order => {
      if(order.status === this.status){
        this.ordersList.push(order);
      }
    });
    this.collectionSize = this.ordersList.length;
  }

  get orders(): Order[] {
    return this.ordersList
      .map((order, i) => ({id: i + 1, ...order}))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

}
