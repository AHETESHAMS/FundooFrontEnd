import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class LabelService {

  constructor(private http:HttpClient) { }
 createLabel(labelDto:any) :any
 {
   console.log("Inside Label Service"+labelDto.name);
   return this.http.post("http://localhost:8080/createlabel?token="+localStorage.getItem('token'),labelDto);
 } 
 getAllLabels()
 {
   console.log("get all label service");
   return this.http.get("http://localhost:8080/getalllabels?token="+localStorage.getItem('token'));
 }
 deleteLabel(label:any):any
 {
   console.log(label.id);
   return this.http.put("http://localhost:8080/deletelabel?token="+localStorage.getItem('token')+"&labelId="+label.id,null);
 }
 updateLabel(labelDto:any, label:any):any
 {
   console.log("update service"+labelDto.id);
   console.log("update service"+labelDto.name);
   return this.http.put("http://localhost:8080/updatelabel?token="+localStorage.getItem('token')+"&labelId="+label.id,labelDto.name);
 }
//  addLabelToNote()
//  {
//    console.log("add Label To Note Servicce");
//    return this.http.post("http://localhost:8080/addlabeltonote?token="+"&noteId=",null);
   
//  }
}
