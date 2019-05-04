import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { user } from 'src/app/model/user.register.model';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { equalSegments } from '@angular/router/src/url_tree';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 user = new user();
 
  title = "Create Your Fundoo Acoount";
  constructor(private httpUser: UserService,

    private snackbar:MatSnackBar) { }
email = new FormControl('',Validators.required);
  ngOnInit() {
  }
  
  register(){
   
    if(this.user.name==null)
    {
      this.snackbar.open('Invalid Name Field','undo',{duration:5000});
    }
    else if(this.user.emailId==null)
    {
      this.snackbar.open('Invalid Email Field','undo',{duration:5000});
    }
    else if(this.user.phNumber==null)
    {
      this.snackbar.open('Invalid PhNumber Field','undo',{duration:5000});
    }
    else if(this.user.phNumber.length>10)
    {
      this.snackbar.open('Numbers must be only 10 digits','undo',{duration:5000});
    }
    else if(this.user.phNumber.length<10)
    {
      this.snackbar.open('Numbers must be 10 digits','undo',{duration:5000});
    }
    else if(this.user.password==null)
    {
      this.snackbar.open('Invalid Password Field','undo',{duration:5000});
    }
    else if(this.user.password.length<8)
    {
      this.snackbar.open('Password must be more than 8 charachters','undo',{duration:5000});
    }
    else
    {
      this.httpUser.saveUser(this.user).subscribe(data=>
        { this.snackbar.open(data.message,'undo' ,{duration:5000});
      console.log(data)})
    }
 
  }


}
