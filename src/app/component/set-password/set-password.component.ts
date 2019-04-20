import { Component, OnInit } from '@angular/core';
import { SetPasswordDto } from 'src/app/model/user.setpassword.model';
import { UserService } from 'src/app/Service/user.service';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-set-password',
  templateUrl: './set-password.component.html',
  styleUrls: ['./set-password.component.scss']
})
export class SetPasswordComponent implements OnInit {
  setPasswordDto = new SetPasswordDto();
  constructor(private httpUser:UserService,
    private snackbar:MatSnackBar) { }

  ngOnInit() {
  }
  setPassword()
  {
    
  }
}
