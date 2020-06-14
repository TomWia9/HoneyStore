import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faUser = faUser;

  constructor() { }

  ngOnInit(): void {
  }

}
