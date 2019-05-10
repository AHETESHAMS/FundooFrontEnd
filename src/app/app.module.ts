import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DemoMaterialModule } from './matrial-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './Service/user.service';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { SetPasswordComponent } from './component/set-password/set-password.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddNoteComponent } from './component/add-note/add-note.component';
import { NoteIconsComponent } from './component/note-icons/note-icons.component';
import { GetAllNotesComponent } from './component/get-all-notes/get-all-notes.component';
import { TrashComponent } from './component/trash/trash.component';
import { ArchiveComponent } from './component/archive/archive.component';
import { PinComponent } from './component/pin/pin.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent,
    SetPasswordComponent,
    DashboardComponent,
    AddNoteComponent,
    NoteIconsComponent,
    GetAllNotesComponent,
    TrashComponent,
    ArchiveComponent,
    PinComponent
   
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
