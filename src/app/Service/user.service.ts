import { Injectable } from '@angular/core';

import { user } from '../model/user.register.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import{LoginDto} from '../model/user.login.model'
import { SendMail } from '../model/user.sendmail.model';
import { SetPasswordDto } from '../model/user.setpassword.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http : HttpClient) { }
  
  
  saveUser(userRequestBody:user):Observable<any>{
    console.log(userRequestBody)
    return this.http.post("http://localhost:8080/saveuser?name="+userRequestBody.name,userRequestBody);
  }
  userLogin(userRequestBody:LoginDto):Observable<any>
  {
      console.log("inside userLogin");
      console.log(userRequestBody);
      return this.http.post("http://localhost:8080/login?emailId="+userRequestBody.emailId,userRequestBody);
  }
  sendMail(userRequestBody:SendMail):Observable<any>
  {
    console.log("Setting password");
    return this.http.post("http://localhost:8080/forgotPassword?emailId="+userRequestBody.emailId,userRequestBody);
  }
  setPassword(userRequestBody:SetPasswordDto)
  {

  }
  
}
