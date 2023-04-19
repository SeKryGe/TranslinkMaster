import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainLayotComponent } from './shared/components/main-layot/main-layot.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SignUpPageComponent } from './registration/sign-up-page/sign-up-page.component';
import { LoginPageComponent } from './registration/login-page/login-page.component';
import { TodoComponent } from './shared/components/todo/todo.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TodoFormComponent } from './todo-form/todo-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainLayotComponent,
    SignUpPageComponent,
    LoginPageComponent,
    TodoComponent,
    TodoFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
