import { Component, OnInit } from '@angular/core';
import {NoteService} from 'src/app/Service/note.service';
@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {

  notes:any;
  constructor(private httpUser: NoteService){}
  ngOnInit() {
    this.httpUser.getAllTrashedNotes().subscribe((response: any)=>
    {
        console.log(response);
        this.notes = response;
    });
   
  }
}
