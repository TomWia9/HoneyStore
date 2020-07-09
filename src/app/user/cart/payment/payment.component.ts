import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { Address } from 'src/app/shared/address';
import { Order } from 'src/app/shared/order';
import { Client } from 'src/app/shared/client';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  form: FormGroup;
  client: Client;
  address: Address = new Address();
  order: Order = new Order();

  constructor(private cartService: CartService, private orderService: OrdersService, private authService: AuthService,
              private usersService: UsersService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      delivery: new FormControl(null, Validators.required),
      payment: new FormControl(null, Validators.required)
    });

    this.usersService.GetClientAddress(this.authService.getCurrentUserValue().id).subscribe(x => {
      this.address = x.body;
    });
  }

  onSubmit() {
    this.client.email = this.authService.getCurrentUserValue().email;
    this.client.firstName = this.authService.getCurrentUserValue().firstName;
    this.client.lastName = this.authService.getCurrentUserValue().lastName;
    this.client.address = this.address;

    this.order.client = this.client;
    this.order.delivery = this.form.value.delivery;
    this.order.payment = this.form.value.payment;
    this.cartService.getCart(this.authService.getCurrentUserValue().id).subscribe(x => {
      this.order.products = x.body.honeys;
    });
    this.order.date = new Date();
  }

}
