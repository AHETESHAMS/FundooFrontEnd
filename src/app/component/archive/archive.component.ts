import { Component, OnInit } from '@angular/core';
import {NoteService} from 'src/app/Service/note.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  notes:any;
  constructor(private httpUser: NoteService){}
  ngOnInit() {
    this.httpUser.getAllArchivedNotes().subscribe((response: any)=>
    {
        console.log(response);
        this.notes = response;
    });
  }
}
