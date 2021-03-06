import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/Service/note.service';
import { from } from 'rxjs';
import { CollaboratorDialogBoxComponent } from '../collaborator-dialog-box/collaborator-dialog-box.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LabelService } from 'src/app/Service/label.service';
import { LabelDto } from 'src/app/model/label.labelDto';
import { MatSnackBar } from '@angular/material';
import { DataService } from 'src/app/Service/data-service.service';
@Component({
  selector: 'app-note-icons',
  templateUrl: './note-icons.component.html',
  styleUrls: ['./note-icons.component.scss']
})
export class NoteIconsComponent implements OnInit {
  @Input() notes: any;
  constructor(private httpUser: NoteService, private httpLabel: LabelService, private dialog: MatDialog, private snackbar: MatSnackBar, private dataService: DataService) {
  }
  labels: any;
  colors: any;
  labelDto = new LabelDto();
  message: any;
  ngOnInit() {

    this.httpLabel.getAllLabels().subscribe((response: any) => {
      console.log(response);
      this.labels = response;
      console.log(this.labels);
    });



  }
  colorCode = [
    [
      { name: "white", colorCode: "#fff" },
      { name: "red", colorCode: "#fc8981" },
      { name: "orange", colorCode: "#ffb834" }],

    [
      { name: "yellow", colorCode: "#fff181" },
      { name: "green", colorCode: "#c5fd98" },
      { name: "teal", colorCode: "#96ffec" },
    ],
    [
      { name: "blue", colorCode: "#ADD8E6" },
      { name: "darkblue", colorCode: "#a6cbf7" },
      { name: "purple", colorCode: "#800080" },
    ],

    [
      { name: "pink", colorCode: "#ffcee6" },
      { name: "brown", colorCode: "#e9c7a9" },
      { name: "gray", colorCode: "#e7e9ec" }
    ]
  ]

  reminder() {
    console.log("reminder");
  }
  deleteNote() {
    console.log("noteId=" + this.notes.id);
    this.httpUser.deleteNote(this.notes.id).subscribe(response => {
      console.log(response);
      this.dataService.changeMessage("Note Deleted");
    });
  }
  changeColor(color) {
    //this.colors=color
    //console.log(this.colors)
    console.log("Set color");
  }

  updateNote(color: any) {
    console.log("update note color:=" + color);
    console.log(this.notes.id);
    this.httpUser.updateColor(color, this.notes.id).subscribe(response => {
      console.log("Response of Color" + response);
      this.dataService.changeMessage("Color Changed");
    },
      error => {
        console.log('error===', error)
      })
  }
  archive() {
    console.log("noteId=" + this.notes.id);
    this.httpUser.archiveNote(this.notes.id).subscribe(response => {
      console.log(response);
      this.dataService.changeMessage("Note Archived");

    });
  }
  collaborator(): void {
    const dialogRef = this.dialog.open(CollaboratorDialogBoxComponent, {
      width: '600px',
      minHeight: '200px',
      data: this.notes
    });
    // console.log(note.id);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }
  addLabelToNote(label: any) {
    console.log("add Label to note" + this.notes);
    console.log("labelID" + label.name);
    this.labelDto.name = label.name;
    this.httpLabel.addLabelToNote(this.labelDto, this.notes.id).subscribe((response: any) => {
      this.snackbar.open("Label Added To Note", 'undo', { duration: 5000 });
      this.dataService.changeMessage("Label Added to Note");
    })
  }
  setReminderToday() {
    let date: Date = new Date();
    console.log("Today");
    this.httpUser.addReminder(this.notes.id, date).subscribe((response: any) => {
      this.snackbar.open(response.message, 'undo', { duration: 5000 });
      this.dataService.changeMessage("Reminder Set For Today");
    });
  }
  setReminderTomorrow() {
    let date: Date = new Date();
    date.setDate(date.getDate() + 1);
    this.httpUser.addReminder(this.notes.id, date).subscribe((response: any) => {
      this.snackbar.open(response.message, 'undo', { duration: 5000 });
      this.dataService.changeMessage("Reminder Set For Tomorrow");
    });

  }
  setReminderNextWeek() {
    let date: Date = new Date();
    date.setDate(date.getDate() + 6);
    this.httpUser.addReminder(this.notes.id, date).subscribe((response: any) => {
      this.snackbar.open(response.message, 'undo', { duration: 5000 });
      this.dataService.changeMessage("Reminder Set For Next Week");
    });
  }
}
