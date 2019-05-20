import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { importType } from '@angular/compiler/src/output/output_ast';
import {NoteService} from 'src/app/Service/note.service';
import { FormControl } from '@angular/forms';
import {NoteDto} from 'src/app/model/note.noteDto.model'
@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.scss']
})
export class DialogBoxComponent implements OnInit {
  noteDto = new NoteDto();
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private noteService: NoteService, private snackBar: MatSnackBar, public dialogRef: MatDialogRef<DialogBoxComponent>) { }
  note: any;
  ngOnInit() {
  }
updateNote()
{
  console.log("update working");
  this.noteDto.title= this.data.title;
  this.noteDto.description = this.data.description;
  this.noteService.updateNote(this.noteDto,this.data.id).subscribe((response:any)=>
  {
    console.log("Response"+response);
  }); ;
  
  this.dialogRef.close();
  
  }
}

