import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Address } from '../shared/address';
import { Register } from '../shared/register';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { Login } from '../auth/login';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  error: boolean;
  constructor(private http: HttpClient, private usersService: UsersService, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      passwordRepeat: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      firstName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      city: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      streetAndHouseNumber: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      postcode: new FormControl(null, [Validators.required, Validators.minLength(5)]),
  }); }

  onSubmit() {

     const address: Address = {
       city: this.form.value.city,
       streetAndHouseNumber: this.form.value.streetAndHouseNumber,
       postCode: this.form.value.postcode
     };

     const register: Register = {
       firstName: this.form.value.firstName,
       lastName: this.form.value.lastName,
       email: this.form.value.email,
       password: this.form.value.password,
       address
     };

     this.usersService.Register(register).subscribe(
       () => {
        this.form.reset();
        this.error = false;

        const login: Login = {
          email: register.email,
          password: register.password
        };

        this.authService.login(login).subscribe(() => {
              this.router.navigate(['']);
            });
          },

       () => this.error = true
        )
  };
}
