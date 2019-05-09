import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  
  constructor(private http:HttpClient) { }
  createNote(url:string,userRequestBody:any):Observable<any>
  {
      console.log(userRequestBody);
      console.log('token----->'+localStorage.getItem('token'))
      return this.http.post("http://localhost:8080/createnote?token="+localStorage.getItem('token'),userRequestBody);
  }
  getAllNotes()
  {
    console.log(localStorage.getItem('token'));
    return this.http.get("http://localhost:8080/getallnotes?token="+localStorage.getItem('token'));
  }
}
