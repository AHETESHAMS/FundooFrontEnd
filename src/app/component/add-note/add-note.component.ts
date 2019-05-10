import { Component, OnInit } from '@angular/core';
import {NoteDto} from 'src/app/model/note.noteDto.model';
import { MatSnackBar } from '@angular/material';
import {NoteService} from 'src/app/Service/note.service';
@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {
  noteDto = new NoteDto();
  private showAddNote: boolean;
  
  constructor(private httpUser: NoteService,

    private snackbar:MatSnackBar) { }
 
  ngOnInit() {
  }
  showCard()
  {
    console.log("Clicked");
    this.showAddNote=true;
  }
  createNote()
  {
    if(this.noteDto.title==null && this.noteDto.description==null)
    {
      this.showAddNote=false;
    }
    else
    {
      console.log(this.noteDto);
      this.httpUser.createNote("/createnote?token="+localStorage.getItem('token'),this.noteDto).subscribe(data=>
        { this.snackbar.open(data.message,'undo' ,{duration:5000});
      console.log(data)})
      this.showAddNote=false;
    } 
  }

}
