import { Component, OnInit } from '@angular/core';
import { unusedValueExportToPlacateAjd } from '@angular/core/src/render3/interfaces/renderer';
import { LoginDto } from 'src/app/model/user.login.model';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDto = new LoginDto();
  
  constructor(private httpUser: UserService,
    private snackbar:MatSnackBar) { }

  ngOnInit() {
  }
  login()
  {
    console.log("Button clicked");
    this.httpUser.userLogin(this.loginDto).subscribe(data=>
      { this.snackbar.open(data.message,'undo' ,{duration:5000});
  console.log(data)})
  }
  
}
