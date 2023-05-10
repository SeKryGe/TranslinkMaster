import { Injectable } from '@angular/core';
import { User } from '../interfaces';
import { Observable, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user?: Observable<User>

  host = 'http://localhost:3000/auth';

  constructor(
    private http: HttpClient,
    private toast: ToastrService) { }

  
  loginIn(email: string, password: string) {
    return this.http.post<any>(`${this.host}/login`, {
      "email": email,
      "password": password
    })
    .pipe(
      map((token) => {
        console.log(token)
        localStorage.setItem("token", token.token)
        this.toast.success('Success','You are logged In')
        return token
      })
      )
  }

  loggedIn() {
    return !!localStorage.getItem("token")
  }

  signUp(user: User) {
    return this.http.post<any>(`${this.host}/signup`, {
      "email":user.email,
      "password":user.password,
      "firstName":user.firstName,
      "lastName":user.lastName
    }).pipe(
      map( token => {
        console.log(token)
        localStorage.setItem("token", token.token)
        this.toast.success('Success', 'You are create the User')
        return token
      })
      )
  }

  logOut() {
    localStorage.removeItem('token')
    this.toast.success('Success', 'You are log Out')
  }

  updateUser(user: string, data: { firstName: string; lastName: string; }) {
    throw new Error('Method not implemented.');
  }
}
