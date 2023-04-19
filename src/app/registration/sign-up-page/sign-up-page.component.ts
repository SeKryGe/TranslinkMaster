import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/shared/interfaces';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-sign-up-page',
  templateUrl: './sign-up-page.component.html',
  styleUrls: ['./sign-up-page.component.css']
})
export class SignUpPageComponent {


  user!: User
  signupForm!: FormGroup

  constructor(
    public auth: AuthService,
    public fb: FormBuilder,
    private router: Router
    ) { }

  ngOnInit() {
    this.signupForm = this.fb.group({
      'email': [null,[
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]
    ],
      'password': [null, [
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required
      ]
    ],
      'firstName': [null,[
        Validators.required
      ]
    ],
      'lastName': [null, [
        Validators.required
      ]
    ],
    })
  }

  get email() {return this.signupForm.get('email')}
  get password() {return this.signupForm.get('password')}

  get firstName() {return this.signupForm.get('firstName')}
  get lastName() {return this.signupForm.get('lastName')}

  signUp() {
    throw new Error('Method not implemented.');
  }

  setNames(user:any) {
    return this.auth.updateUser(user, {firstName:this.firstName?.value, lastName:this.lastName?.value})
  }
}
