import { Component, OnInit } from '@angular/core';
import {NoteService} from 'src/app/Service/note.service';
@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {

  notes:any;
  constructor(private httpUser: NoteService){}
  ngOnInit() {
    this.httpUser.getAllPinnedNotes().subscribe((response: any)=>
    {
        console.log(response);
        this.notes = response;
    });
  }
}
