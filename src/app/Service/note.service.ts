import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { url } from 'inspector';
const httpOptions = {

  headers: new HttpHeaders().set('Content-Type', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('Access-Control-Allow-Headers', '*')

};



@Injectable({
  providedIn: 'root'
})
export class NoteService {
  baseUrl="http://localhost:8080/";
  
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

  updateColor(color:any,notes:any)
  {
    console.log("Note Service color:="+color);
    console.log(color +" "+ notes);
    
    return this.http.put("http://localhost:8080/color?color="+color+"&token="+localStorage.getItem('token')+"&noteId="+notes,null);
  }
 deleteNote(notes:any)
 {
   console.log("deleteNotes="+notes);
   return this.http.put("http://localhost:8080/trash?token="+localStorage.getItem('token')+"&noteId="+notes,null);
 }
 getAllTrashedNotes()
 {
   return this.http.get("http://localhost:8080/getalltrashednotes?token="+localStorage.getItem('token'));
 }
 getAllPinnedNotes()
 {
   return this.http.get("http://localhost:8080/getallpinednotes?token="+localStorage.getItem('token'));
 }
 getAllArchivedNotes()
 {
   return this.http.get("http://localhost:8080/getallarchivednotes?token="+localStorage.getItem('token'));
 }
}
