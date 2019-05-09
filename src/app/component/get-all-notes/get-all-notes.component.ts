import { Component, OnInit } from '@angular/core';
import {NoteDto} from 'src/app/model/note.noteDto.model';
import {NoteService} from 'src/app/Service/note.service';
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notes:any;
  constructor(private httpUser: NoteService){}
  ngOnInit() {
    this.httpUser.getAllNotes().subscribe((response: any)=>
    {
        console.log(response);
        this.notes = response;
    });
   
  }

}
