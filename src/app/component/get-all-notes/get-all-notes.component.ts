import { Component, OnInit } from '@angular/core';
import {NoteDto} from 'src/app/model/note.noteDto.model';
import {NoteService} from 'src/app/Service/note.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogBoxComponent} from 'src/app/component/dialog-box/dialog-box.component';
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notes:any;
  name: string;
  collaboratedNotes:any;
  constructor(private httpUser: NoteService, public dialog: MatDialog){}
 
  ngOnInit() {
    this.httpUser.getAllNotes().subscribe((response: any)=>
    {
        console.log("All Notes Response= "+response);
        this.notes = response;
    });
   
    // this.httpUser.getAllCollaboratedNotes().subscribe((collaboratedNotesResponse: any)=>
    // {
    //     console.log("Collaborated Notes Response= "+collaboratedNotesResponse);
    //     this.collaboratedNotes = collaboratedNotesResponse;
    // });
  }
  pin(note:any)
  {
    console.log("pin"+note.id);
    this.httpUser.pinNote(note.id).subscribe((response:any)=>
    {
      console.log(response);
    }); 
  }
  openDialog(note:any): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: note
    });
    // console.log(note.id);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
    
  }
}

