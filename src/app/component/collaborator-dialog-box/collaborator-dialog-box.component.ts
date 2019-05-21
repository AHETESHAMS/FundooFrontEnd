import { Component, OnInit, Input, Inject} from '@angular/core';
import { NoteService } from 'src/app/Service/note.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { MatSnackBar } from '@angular/material';
import {SendMail} from 'src/app/model/user.sendmail.model';
@Component({
  selector: 'app-collaborator-dialog-box',
  templateUrl: './collaborator-dialog-box.component.html',
  styleUrls: ['./collaborator-dialog-box.component.scss']
})
export class CollaboratorDialogBoxComponent implements OnInit {
  @Input() note:any;
  constructor( @Inject(MAT_DIALOG_DATA) public data: any,private httpCollaborator: NoteService, private snackbar:MatSnackBar) { }
  collaboratedNotes:any;
  collaboratedUserEmailId = new SendMail();
  name:string = localStorage.getItem('name');
  userEmailId:string = localStorage.getItem('emailId');
  ngOnInit() {
    
    this.httpCollaborator.getAllCollaboratedNotes().subscribe((response:any)=>
    {
          console.log(response);
          this.collaboratedNotes = response;
    });
  }
  collaborate()
  {
     if(this.collaboratedUserEmailId.emailId == null)
     {
      this.snackbar.open('Please fill email','undo' ,{duration:5000});
     }
     else
     {
        console.log(this.collaboratedUserEmailId.emailId);
        this.httpCollaborator.collaborateNote(this.data,this.collaboratedUserEmailId).subscribe((response:any)=> { 
          this.snackbar.open(response.message,'undo' ,{duration:5000});
        })
  }  
  }
  SaveCollaborator()
  {
    if(this.collaboratedUserEmailId.emailId == null)
    {
     this.snackbar.open('Please fill email','undo' ,{duration:5000});
    }
    else
    {
       console.log(this.collaboratedUserEmailId.emailId);
       this.httpCollaborator.collaborateNote(this.data,this.collaboratedUserEmailId).subscribe((response:any)=> { 
         this.snackbar.open(response.message,'undo' ,{duration:5000});
      })
    }  
  }
}

