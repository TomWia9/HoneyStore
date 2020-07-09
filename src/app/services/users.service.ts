import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Register } from '../shared/register';
import { Observable } from 'rxjs';
import { Address } from '../shared/address';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private htpp: HttpClient) { }

  Register(register: Register): Observable<HttpResponse<any>>{
    return this.htpp.post<any>('https://localhost:5001/api/clients/register', register, { observe: 'response' });
  }

  GetClientAddress(clientId: number): Observable<HttpResponse<Address>> {
    return this.htpp.get<Address>(`https://localhost:5001/clients/getClientAddress/${clientId}`, {observe: 'response'});
  }

}
