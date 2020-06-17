import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  login: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.login = this.authService.getLogin();
  }

  signOut(){
    this.authService.signOut();
    //router.nav
  }



}
