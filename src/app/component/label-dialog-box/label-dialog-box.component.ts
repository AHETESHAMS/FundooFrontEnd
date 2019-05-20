import { Component, OnInit } from '@angular/core';
import {LabelService} from 'src/app/Service/label.service'
import { LabelDto } from 'src/app/model/label.labelDto';
import { MatSnackBar } from '@angular/material';
import { element } from '@angular/core/src/render3';
import { NoteDto } from 'src/app/model/note.noteDto.model';
@Component({
  selector: 'app-label-dialog-box',
  templateUrl: './label-dialog-box.component.html',
  styleUrls: ['./label-dialog-box.component.scss']
})
export class LabelDialogBoxComponent implements OnInit {

  constructor(private httpLabel:LabelService,  private snackbar:MatSnackBar) { }
  labelDto = new LabelDto(); 
  labels:any;
  ngOnInit() {

    this.httpLabel.getAllLabels().subscribe((response: any)=>
    {
        console.log(response);
        this.labels = response;
        console.log(this.labels);
    });
  }
createLabel()
{
  console.log("inside create");
  console.log(this.labelDto);
  if(this.labelDto.name==null)
  {
    this.snackbar.open('please fill label','undo',{duration:5000});
  }
  else
  {
    console.log("label");
    this.httpLabel.createLabel(this.labelDto).subscribe(data=>
      { this.snackbar.open(data.message,'undo' ,{duration:5000});
    console.log(data)});
  } 
  
}
deleteLabel(label:any)
{
  console.log("inside delete");
  console.log("Delete Label"+label.id);
  this.httpLabel.deleteLabel(label).subscribe(data=>
    { this.snackbar.open(data.message,'undo' ,{duration:5000});
  console.log(data)});;
}
updateLabel(label:any)
{
  console.log(label.name);
  console.log("inside Update"+label.name);
  this.labelDto.name = label;
  if(label.name == null)
  {
    this.snackbar.open('Please assign Label Name','undo' ,{duration:5000});
  }
  else
  {
    console.log("inside update Label");
    this.httpLabel.updateLabel(this.labelDto,label).subscribe(data=>
      { this.snackbar.open(data.message,'undo' ,{duration:5000});
    console.log(data)});
  }
}
done()
{
  console.log("done");
  
}
}
