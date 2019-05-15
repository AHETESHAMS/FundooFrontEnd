import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './component/register/register.component';
import { LoginComponent } from './component/login/login.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './component/set-password/set-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { NoteIconsComponent } from './component/note-icons/note-icons.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { TrashComponent } from './component/trash/trash.component';
import { PinComponent } from './component/pin/pin.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { DialogBoxComponent } from './component/dialog-box/dialog-box.component';
import { AuthService } from './auth.service';

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
    canActivate : [AuthService],
    path: 'dashboard',component:DashboardComponent,
    children:[
      {
        path: '',
        component:GetAllNotesComponent
      },
      {
        path: 'note',
        component:GetAllNotesComponent
      },
      {
        path:'trash',
        component:TrashComponent
      },
      {
        path:'archive',
        component:ArchiveComponent
      }
    ]
    
  },
  {
    path:'addNote',
    component:AddNoteComponent
  },
  {
    path:'noteIcons',
    component:NoteIconsComponent
  },
  
  {
    path:'pin',
    component:PinComponent
  },
  {
    path:'archive',
    component:ArchiveComponent
  },
  {
    path:'dialogBox',
    component:DialogBoxComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]

  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
