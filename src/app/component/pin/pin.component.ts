import { Component, OnInit } from '@angular/core';
import {NoteService} from 'src/app/Service/note.service';
import {DialogBoxComponent} from 'src/app/component/dialog-box/dialog-box.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
@Component({
  selector: 'app-pin',
  templateUrl: './pin.component.html',
  styleUrls: ['./pin.component.scss']
})
export class PinComponent implements OnInit {

  notes:any;
  constructor(private httpUser: NoteService, public dialog: MatDialog){}
  ngOnInit() {
    this.httpUser.getAllPinnedNotes().subscribe((response: any)=>
    {
        console.log(response);
        this.notes = response;
    });
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
