import { Component, OnInit } from '@angular/core';
import { HoneysService } from 'src/app/services/honeys.service';
import { AuthService } from 'src/app/auth/auth.service';
import { HoneyInTheWarehouse } from 'src/app/shared/honeyInTheWarehouse';

@Component({
  selector: 'app-honey-items',
  templateUrl: './honey-items.component.html',
  styleUrls: ['./honey-items.component.css']
})
export class HoneyItemsComponent implements OnInit {

  honeys: HoneyInTheWarehouse[] = [];
  isLoggedIn: boolean;

  constructor(private honeysService: HoneysService, private authService: AuthService) { }

  ngOnInit(): void {
    this.honeysService.getHoneysList().subscribe(x => {
      this.honeys = x.body;
    });
    this.authService.currentUser.subscribe(x => {
      this.isLoggedIn = x !== null;
    });
  }
}
