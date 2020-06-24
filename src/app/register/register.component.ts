import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'passwordRepeat': new FormControl(null, [Validators.required, Validators.minLength(5)]),
      'firstName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'lastName': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'city': new FormControl(null, [Validators.required, Validators.minLength(2)]),
      'street': new FormControl(null, [Validators.required, Validators.minLength(3)]),
      'postcode': new FormControl(null, [Validators.required, Validators.minLength(5)]),
  })}

  onSubmit(){
      console.log(this.form.value);
      this.form.reset();
  }
}
