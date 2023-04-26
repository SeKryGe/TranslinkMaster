import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { MainLayotComponent } from './shared/components/main-layot/main-layot.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginPageComponent } from './registration/login-page/login-page.component';
import { SignUpPageComponent } from './registration/sign-up-page/sign-up-page.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

const routes: Routes = [
  { path: '', component: MainLayotComponent, children:[
    {path: '', redirectTo: '/', pathMatch: 'full'},
    {path: '', component: HomePageComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'signUp', component: SignUpPageComponent},
  ]

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
