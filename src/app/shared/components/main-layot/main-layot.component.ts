import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-layot',
  templateUrl: './main-layot.component.html',
  styleUrls: ['./main-layot.component.css']
})
export class MainLayotComponent {

  constructor(public auth: AuthService,
    private route: Router) {
  } 

  logOut (){
    this.auth.logOut()
    this.route.navigate(['/login'])
  }

}
