import { Component, OnInit } from '@angular/core';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/renderer';
import { LoginDto } from 'src/app/model/user.login.model';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material';
import { Router, Route, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
   token :string
  loginDto = new LoginDto();
  
  constructor(private httpUser: UserService,
    private snackbar:MatSnackBar,
    private route :ActivatedRoute,
    private router:Router) { }
 
  ngOnInit() { 
   this.token = this.route.snapshot.params['token']
    console.log('login-->'+this.token);
    if(this.token.length!=0){
      this.httpUser.verifyUser(this.token).subscribe(data=> console.log(data))
    }
  }
  login()
  {
    if(this.loginDto.emailId==null)
    {
      this.snackbar.open('Please Enter EmailId','undo' ,{duration:5000});
    }
    else if(this.loginDto.password==null)
    {
      this.snackbar.open('Please Enter Password','undo' ,{duration:5000});
    }
    else
    {
    this.httpUser.userLogin(this.loginDto).subscribe(data=>
      { this.snackbar.open(data.message,'undo' ,{duration:5000});
     localStorage.setItem('token',data.token), localStorage.setItem('name',data.name), localStorage.setItem('emailId', data.emailId)})
     this.router.navigateByUrl("/dashboard");
    } 
  }
  
}
