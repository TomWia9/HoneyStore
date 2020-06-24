import { Component, OnInit } from '@angular/core';
import { Payment } from 'src/app/shared/payment';
import { Address } from 'src/app/shared/address';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
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

  constructor(private cartService: CartService, private orderService: OrdersService) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'delivery': new FormControl(null, Validators.required),
      'payment': new FormControl(null, Validators.required)
    })
    //get logged client id
    //this.address = clientService.getClientAddress(clientID)
    this.payment = new Payment(this.address);
    console.log(this.payment);
    
  }

  onSubmit(){
    if(this.form.value.delivery !== null && this.form.value.payment !== null){
      this.payment.delivery = this.form.value.delivery;
      this.payment.paymentMethod = this.form.value.payment;
      this.cartService.addPayment(this.payment);
      this.orderService.addOrder();

      console.log(this.payment);
      
    } else{
      console.log('err');
      
    }
    
  }

}
