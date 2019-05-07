import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './component/set-password/set-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { NoteIconsComponent } from './component/note-icons/note-icons.component';

const routes: Routes = [
  {
    path:'register',children:[
      {path:'',component:RegisterComponent},
      {path:'',component:LoginComponent}
     ]
  },
  {
    path:'login',children:[
      {path:'',component:LoginComponent},
    {path:':token',component:LoginComponent}]
    
  },
  {
    path:'forgotPassword',
    component:ForgotPasswordComponent
  },
  {
      path:'setPassword/:token',
      component:SetPasswordComponent
  },
  {
    path: 'dashboard',
    component:DashboardComponent
  },
  {
    path:'addNote',
    component:AddNoteComponent
  },
  {
    path:'noteIcons',
    component:NoteIconsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]

  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
