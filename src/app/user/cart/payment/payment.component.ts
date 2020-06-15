import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/shared/payment';
import { Address } from 'src/app/shared/address';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CartService } from 'src/app/services/cart.service';
import { OrdersService } from 'src/app/services/orders.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  form: FormGroup;
  payment: Payment;
  address: Address = {city: 'Warsaw', street: 'Saint street 4', postCode: '00-000'};

  constructor(private fb: FormBuilder, private cartService: CartService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      delivery: null,
      payment: null
    })
    //get logged client id
    //this.address = clientService.getClientAddress(clientID)
    this.payment = new Payment(this.address);
    console.log(this.payment);
    
  }

  onSubmit(value){
    if(value.delivery !== null && value.payment !== null){
      this.payment.delivery = value.delivery;
      this.payment.paymentMethod = value.payment;
      this.cartService.addPayment(this.payment);
      this.orderService.addOrder();

      console.log(this.payment);
      
    } else{
      console.log('err');
      
    }
    
  }

}
