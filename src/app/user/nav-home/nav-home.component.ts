import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  root = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.root = this.router.url !== '/cart'
  }


}
