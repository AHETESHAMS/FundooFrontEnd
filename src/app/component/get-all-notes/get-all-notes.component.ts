import { Component, OnInit, Input} from '@angular/core';
import { NoteDto } from 'src/app/model/note.noteDto.model';
import { NoteService } from 'src/app/Service/note.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, mixinColor } from '@angular/material';
import { DialogBoxComponent } from 'src/app/component/dialog-box/dialog-box.component';
import { LabelService } from 'src/app/Service/label.service';
import { MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/Service/data-service.service';
import { container } from '@angular/core/src/render3';
import { InteractionService } from 'src/app/Service/interaction.service';
@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {
  notes: any;
  name: string;
  labelsOfNote: any;
  collaboratedNotes: any;
  collaboratedUser: any;
  currentDate = new Date();
  message: any;
  view:boolean;
  constructor(private httpUser: NoteService, private httpLabel: LabelService, public dialog: MatDialog, private snackbar: MatSnackBar, private dataService: DataService, private interactionService:InteractionService) { }

  ngOnInit() {
    this.dataService.currentMessage.subscribe(
      (response: any) => {        
        this.message = response;
        this.httpUser.getAllNotes().subscribe((response: any) => {
          console.log("Venky", response);
          this.notes = response;
        });

        this.httpUser.getAllCollaboratedNotes().subscribe((collaboratedNotesResponse: any) => {
          console.log("Ahetesham Collaborated Notes Response= " + collaboratedNotesResponse);
          this.collaboratedNotes = collaboratedNotesResponse;
        });

      }
    );
    this.interactionService.changeView$.subscribe(message=>{this.view=message
      console.log("message is:="+this.view);})
  }
  pin(note: any) {
    console.log("pin" + note.id);
    this.httpUser.pinNote(note.id).subscribe((response: any) => {
      console.log(response);
      this.dataService.changeMessage("Note Pinned");
    });
  }
  openDialog(note: any): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '600px',
      data: note
    });
    // console.log(note.id);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });

  }
  removeLabelFromNote(note: any, label: any) {
    console.log("Remove label from note, noteId" + note.id + "labelId=" + label.id);
    this.httpLabel.removeLabelFromNote(note.id, label.id).subscribe((response: any) => {
      this.snackbar.open(response.message, 'undo', { duration: 5000 });
      this.dataService.changeMessage("Label Removed From Note");
    });

  }
  removeReminder(note: any) {
    this.httpUser.removeReminder(note.id).subscribe((response: any) => {
      this.snackbar.open(response.message, 'undo', { duration: 5000 });
      this.dataService.changeMessage("Reminder Removed From Note");
    });
  }
}

