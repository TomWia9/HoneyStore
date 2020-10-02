import { Component, OnInit } from '@angular/core';
import {  faSearch, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  faSignOutAlt = faSignOutAlt;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSignOut(){
    this.authService.logout();
  }

}
