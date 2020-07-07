import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
  login: string;
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.login = this.authService.getCurrentUserValue().email;
  }

  signOut(){
    this.authService.logout();
  }
}
