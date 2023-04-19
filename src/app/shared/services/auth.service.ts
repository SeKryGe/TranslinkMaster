import { Injectable } from '@angular/core';
import { User } from '../interfaces';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: Observable<User>

  constructor() { }

  
  loginIn(email: string, password: string) {
    throw new Error('Method not implemented.');
  }
  signUp(email: string, password: string, firstName:string, lastName:string) {
    throw new Error('Method not implemented.');
  }

  updateUser(user: string, data: { firstName: string; lastName: string; }) {
    throw new Error('Method not implemented.');
  }
}
