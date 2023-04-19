import { Component } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {

  loginInForm!: FormGroup

  constructor(
    public fb: FormBuilder,
    private router: Router,
    public auth: AuthService
  ) {}

  ngOnInit(){
    this.loginInForm = this.fb.group({
      email: new FormControl(null,[
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')
      ]),
      password: new FormControl(null, [
        Validators.minLength(6),
        Validators.maxLength(25),
        Validators.required])
      })
  }

  get email() {return this.loginInForm.get('email')}
  get password() {return this.loginInForm.get('password')}


  loginIn() {
      this.auth.loginIn(this.email?.value, this.password?.value)
      // this.auth.loginIn(this.email?.value, this.password?.value).then( () => {this.router.navigate(['/user'])})
      this.loginInForm.reset()
    }

}
