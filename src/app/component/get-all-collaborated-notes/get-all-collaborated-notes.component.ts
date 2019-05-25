import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Service/user.service';
import { NoteService } from 'src/app/Service/note.service';

@Component({
  selector: 'app-get-all-collaborated-notes',
  templateUrl: './get-all-collaborated-notes.component.html',
  styleUrls: ['./get-all-collaborated-notes.component.scss']
})
export class GetAllCollaboratedNotesComponent implements OnInit {

  constructor(private httpNote:NoteService) { }
  collaboratedNotes:any;
  ngOnInit() {
    this.httpNote.getAllCollaboratedNotes().subscribe((response: any)=>
    {
        console.log(response);
        this.collaboratedNotes = response;
    });
  }

}
