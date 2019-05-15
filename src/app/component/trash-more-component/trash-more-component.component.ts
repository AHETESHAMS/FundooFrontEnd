import { Component, OnInit, Input} from '@angular/core';
import {NoteService} from 'src/app/Service/note.service';
import { from } from 'rxjs';
@Component({
  selector: 'app-trash-more-component',
  templateUrl: './trash-more-component.component.html',
  styleUrls: ['./trash-more-component.component.scss']
})
export class TrashMoreComponentComponent implements OnInit {
  @Input() notes:any;
  constructor(private httpUser: NoteService) { }

  ngOnInit() {
  }
deleteNotePermanently()
{
  this.httpUser.deleteNotePermanently(this.notes.id).subscribe((response: any)=>
    {
        console.log(response);
    });
}
restoreNote()
{
  this.httpUser.restoreNote(this.notes.id).subscribe((response:any)=>{
      console.log(response);
  });
}
}
