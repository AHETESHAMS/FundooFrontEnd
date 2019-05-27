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
 archiveNote(notes:any)
 {
    return this.http.put("http://localhost:8080/archive?token="+localStorage.getItem('token')+"&noteId="+notes,null);
 }
 getAllTrashedNotes()
 {
   return this.http.get("http://localhost:8080/getalltrashednotes?token="+localStorage.getItem('token'));
 }
 getAllPinnedNotes()
 {
    console.log("inside service");
    return this.http.get("http://localhost:8080/getallpinednotes?token="+localStorage.getItem('token'));
 }
 getAllArchivedNotes()
 {
   return this.http.get("http://localhost:8080/getallarchivednotes?token="+localStorage.getItem('token'));
 }
 deleteNotePermanently(noteId:any)
 {
    console.log("inside delete note permanently",noteId);
    return this.http.put("http://localhost:8080/deletenotepermanently?token="+localStorage.getItem('token')+"&noteId="+noteId,null);
 }
 restoreNote(noteId:any)
 {  
  console.log("inside restore note",noteId);
  return this.http.put("http://localhost:8080/trash?token="+localStorage.getItem('token')+"&noteId="+noteId,null);
 }
 pinNote(noteId:any)
 {
  console.log("inside pin note",noteId);
  return this.http.put("http://localhost:8080/pin?token="+localStorage.getItem('token')+"&noteId="+noteId,null);
 }
 updateNote(noteDto:any,noteId:any)
 {
   console.log(noteId);
   console.log(noteDto.title);
   console.log(noteDto.description);
   return this.http.put("http://localhost:8080/updatenote?token="+localStorage.getItem('token')+"&noteId="+noteId,noteDto);
 }
 getAllCollaboratedNotes()
 {
   console.log("Inside collaborator service get all");
   return this.http.get("http://localhost:8080/getcollaboratednotes?token="+localStorage.getItem('token')+"&emailId="+localStorage.getItem('emailId'));
 }
 collaborateNote(note:any, collaboratedUserEmailId:any)
 {
    console.log("Inside collaborator service add collaborator=>"+ collaboratedUserEmailId.emailId);
    return this.http.post("http://localhost:8080/addcollaborator?token="+localStorage.getItem('token')+"&emailId="+collaboratedUserEmailId.emailId+"&noteId="+note.id,null);
 }
 getAllCollaboratedUser(noteId:any)
 {
   console.log("Inside get all collaborated user service");
   return this.http.get("http://localhost:8080/getcollaborateduser?token="+localStorage.getItem('token')+"&noteId="+noteId);
 }
 removeCollaborator(noteId:any, collaboratedUserEmailId:any)
 {
   console.log("remove collab service");
   return this.http.put("http://localhost:8080/removecollaborator?token="+localStorage.getItem('token')+"&emailId="+collaboratedUserEmailId+"&noteId="+noteId,null);
   
 }
}
