import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Register } from '../shared/register';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private htpp: HttpClient) { }

  Register(register: Register): Observable<HttpResponse<any>>{
    return this.htpp.post<any>('https://localhost:5001/api/clients/register', register, { observe: 'response' });
  }

}
