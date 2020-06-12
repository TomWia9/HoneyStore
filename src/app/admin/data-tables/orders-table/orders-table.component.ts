import { Component, OnInit, Input } from '@angular/core';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { ORDERS } from '../orders/orders';
import { Order } from '../../../shared/order';
import { OrderModalComponent } from '../../order-modal/order-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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

  constructor(private modalService: NgbModal){}

  ngOnInit(): void {
    ORDERS_LIST.forEach(order => {
      if(order.status === this.status){
        this.ordersList.push(order);
      }
    });
    this.collectionSize = this.ordersList.length;
    this.ordersList.forEach(order => {
      order.products.forEach(product => {
        order.totalCost += product.price;
      });
    });
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
