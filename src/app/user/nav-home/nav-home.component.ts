import { Component, OnInit } from '@angular/core';
import { faSearch, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-nav-home',
  templateUrl: './nav-home.component.html',
  styleUrls: ['./nav-home.component.css']
})
export class NavHomeComponent implements OnInit {

  faSearch = faSearch;
  faShoppingCart = faShoppingCart;
  faUser = faUser;
  isLoggedIn: boolean;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.isLoggedIn.subscribe(x => {
     this.isLoggedIn = x;
   })
  }


}
