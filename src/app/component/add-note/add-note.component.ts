import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-note',
  templateUrl: './add-note.component.html',
  styleUrls: ['./add-note.component.scss']
})
export class AddNoteComponent implements OnInit {

  private showAddNote: boolean;
  constructor() { }

  ngOnInit() {
  }
  showCard()
  {
    console.log("Clicked");
    this.showAddNote=true;
  }
  createNote()
  {
    
    this.showAddNote=false;
  }

}
