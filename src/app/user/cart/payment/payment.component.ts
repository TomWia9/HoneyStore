import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';
import { AuthService } from 'src/app/auth/auth.service';
import { UsersService } from 'src/app/services/users.service';
import { Address } from 'src/app/shared/address';
import { Order } from 'src/app/shared/order';
import { Client } from 'src/app/shared/client';
import { Honey } from 'src/app/shared/honey';
import { Delivery } from 'src/app/shared/delivery';
import { Payment } from 'src/app/shared/payment';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  form: FormGroup;
  clientId: number;
  client: Client = new Client();
  address: Address = new Address();
  order: Order = new Order();
  isEmpty = false;

  constructor(private cartService: CartService, private ordersService: OrdersService, private authService: AuthService,
              private usersService: UsersService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      delivery: new FormControl(null, Validators.required),
      payment: new FormControl(null, Validators.required)
    });

    this.clientId = this.authService.getCurrentUserValue().id;

    this.usersService.GetClientAddress(this.clientId).subscribe(x => {
      this.address = x.body;
    });

    this.cartService.isEmpty(this.clientId).subscribe(x => {
      this.isEmpty = x.body;
    });
  }

 async onSubmit() {
    this.order.clientId = this.clientId;
    this.order.delivery = this.getDelivery();
    this.order.payment = this.getPayment();
    await this.cartService.getCart(this.clientId).toPromise().then(x => {
      this.order.orderedHoneys = x.body.honeys;
    });
    this.order.totalPrice = this.getTotalPrice(this.order.orderedHoneys);
    this.order.date = new Date();
    console.log(this.order);

    this.ordersService.addOrder(this.order).subscribe(res => {
      console.log(res);

    });
    this.isEmpty = true;
  }

  getTotalPrice(honeys: Honey[]) {
    let totalPrice = 0;
    honeys.forEach(honey => {
      totalPrice += honey.amount * honey.price;
    });
    return totalPrice;
  }

  getDelivery(): Delivery {
    switch (this.form.value.delivery) {
      case '0': return Delivery.PersonalPickup;
      case '1': return Delivery.ParcelLocker;
      case '2': return Delivery.Courier;
    }
  }

  getPayment(): Payment {
    switch (this.form.value.payment) {
      case '0': return Payment.CashOnDelivery;
      case '1': return Payment.CreditCard;
      case '2': return Payment.BLIK;
    }
  }

}
