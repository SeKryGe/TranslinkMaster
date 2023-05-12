import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor( 
    private auth: AuthService,
    private route: Router,
    private toast: ToastrService) {}

  canActivate(): boolean {
    if(this.auth.loggedIn()) {
      return true
    } else {
      this.toast.error("Not autorithed user can't user the aplication", "Relocated to the login page")
      this.route.navigate(['/login'])
      return false
    }
  }
  
}
