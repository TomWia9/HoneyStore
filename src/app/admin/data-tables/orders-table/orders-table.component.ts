import { Component, OnInit, Input } from '@angular/core';
import { faTable } from '@fortawesome/free-solid-svg-icons';
import { Order } from '../../../shared/order';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { OrdersService } from 'src/app/services/orders.service';
import { OrderModalComponent } from 'src/app/shared/order-modal/order-modal.component';

@Component({
  selector: 'app-orders-table',
  templateUrl: './orders-table.component.html',
  styleUrls: ['./orders-table.component.css']
})
export class OrdersTableComponent implements OnInit{
  @Input() status: number;
  ordersList: Order[] = [];

  page = 1;
  pageSize = 4;
  collectionSize: number;
  faTable = faTable;

  constructor(private modalService: NgbModal, private ordersService: OrdersService){}

  ngOnInit(): void {
    this.ordersService.getOrders(false, this.status).subscribe(x => {
      this.ordersList = x.body;
    });
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
