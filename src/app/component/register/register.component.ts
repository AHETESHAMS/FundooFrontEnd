import { Component, OnInit } from '@angular/core';
import { UseExistingWebDriver } from 'protractor/built/driverProviders';
import { user } from 'src/app/model/user.register.model';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

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
   
    console.log('hii')
    console.log(this.user)
   // this.httpUser.saveUser('hiii').subscribe(data=>console.log(data))

    // this.httpUser.saveUser(this.user).subscribe(data=>{
    //   console.log(data)
    // })
    this.httpUser.saveUser(this.user).subscribe(data=>
      { this.snackbar.open(data.message,'undo' ,{duration:5000});
  console.log(data)})
 
  }


}
