import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './component/set-password/set-password.component';

const routes: Routes = [
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'forgotPassword',
    component:ForgotPasswordComponent
  },
  {
      path:'setPassword',
      component:SetPasswordComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]

  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
