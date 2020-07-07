import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Login } from './login';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient, private router: Router){
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }

  public getCurrentUserValue(): User{
    return this.currentUserSubject.value;
  }

  login(login: Login){
    return this.http.post<User>('https://localhost:5001/api/clients/login', login)
    .pipe(map(user => {
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);

      return user;
    }));
  }

  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
    this.router.navigate(['/home']);
  }

  //temp auth
  // login = 'tomaszwiatrowski9@gmail.com'; //it will be recived from the api in the future
  // private loggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  // get isLoggedIn() {
  //   return this.loggedIn.asObservable();
  // }

  // constructor(private router: Router) { }

  // signIn(){
  //   this.loggedIn.next(true);
  //   this.router.navigate(['']);


  //   }

  // signOut(){
  //   this.loggedIn.next(false);
  //   this.router.navigate(['']);
  // }

  // getLogin(){
  //   return this.login;
  // }

}
