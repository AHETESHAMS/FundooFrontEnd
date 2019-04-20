import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material';
import {SendMail} from 'src/app/model/user.sendmail.model'

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  sendMail = new SendMail();
  constructor(private httpUser:UserService,
    private snackbar:MatSnackBar) { }

  ngOnInit() {
  }
  forgot()
  {
    console.log("Button clicked");
    this.httpUser.sendMail(this.sendMail).subscribe(data=>
      { this.snackbar.open(data.message,'undo' ,{duration:5000});
    console.log(data)})
  }
}
