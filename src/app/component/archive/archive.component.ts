import { Component, OnInit } from '@angular/core';
import {NoteService} from 'src/app/Service/note.service';
import { DataService } from 'src/app/Service/data-service.service';
@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {

  notes:any;
  constructor(private httpUser: NoteService, private dataService:DataService){}
  ngOnInit() {
    this.httpUser.getAllArchivedNotes().subscribe((response: any)=>
    {
        console.log(response);
        this.notes = response;
    });
  }
  pin(note:any)
  {
    console.log("fdasfds pin"+note);
    this.httpUser.pinNote(note.id).subscribe((response:any)=>
    {
      console.log(response);
      this.dataService.changeMessage("Color Changed");
    }); 
  }
}
