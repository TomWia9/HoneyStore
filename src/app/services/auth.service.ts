import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  //temp auth
  login = 'tomaszwiatrowski9@gmail.com'; //it will be recived from the api in the future
  private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  get isLoggedIn() {
    return this.loggedIn.asObservable();
  }

  constructor(private router: Router) { }

  signIn(){
    this.loggedIn.next(true);

    }

  signOut(){
    this.loggedIn.next(false);
  }

  getLogin(){
    return this.login;
  }

}
