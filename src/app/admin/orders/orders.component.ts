import { Component, OnInit } from '@angular/core';
import { faTable } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  faTable = faTable;

  constructor() { }

  ngOnInit(): void {
  }

}
