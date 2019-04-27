import { Component, OnInit } from '@angular/core';
import { SetPasswordDto } from 'src/app/model/user.setpassword.model';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit 
{
  setPasswordDto = new SetPasswordDto();
  token :string
  constructor(private httpUser:UserService,
    private snackbar:MatSnackBar,
    private route:ActivatedRoute,
    private router:Router) { 
   this.token = route.snapshot.params['token'];

    }

  ngOnInit() {
  }

  setPassword()
  {
    console.log("Inside"+this.token);
  if(this.setPasswordDto.password==this.setPasswordDto.confirmPassword)
  {
    this.httpUser.setPassword(this.token,this.setPasswordDto).subscribe(data=>
      { this.snackbar.open(data.message,'undo' ,{duration:5000});
  console.log(data)})
  this.router.navigateByUrl("/login");
  }
  else
  {
    this.snackbar.open('Password Confirmation Failed!','undo',{duration:5000});
  }
  }
} 
