import { Component, OnInit, Input} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,OnDestroy} from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LabelDialogBoxComponent} from 'src/app/component/label-dialog-box/label-dialog-box.component';
import {LabelService} from 'src/app/Service/label.service'
import { LabelDto } from 'src/app/model/label.labelDto';
import { ProfileDialogBoxComponent } from '../profile-dialog-box/profile-dialog-box.component';
import { UserService } from 'src/app/Service/user.service';
import { InteractionService } from 'src/app/Service/interaction.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  noteView: boolean;

  

  private _mobileQueryListener: () => void;

  constructor(private httpUser: UserService, private httpLabel:LabelService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,  private router:Router, 
    private dialog:MatDialog, private interactionService:InteractionService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  labels:any;
  token:string = localStorage.getItem('token');
  source:string = "";
  ngOnInit() {

    this.httpLabel.getAllLabels().subscribe((response: any)=>
    {
        console.log(response);
        this.labels = response;
        console.log(this.labels);
    });
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  signOut()
  {
    localStorage.removeItem('token');
    localStorage.removeItem('emailId');
    localStorage.removeItem('name');
    this.router.navigateByUrl('/login');
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LabelDialogBoxComponent, {
      maxWidth: '350px',
     minHeight:'200px'
    });
    // console.log(note.id);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
}
profileDialogBox(): void {
  const dialogRef = this.dialog.open(ProfileDialogBoxComponent, {
  width: '900px',
   height:'600px'
  });
  // console.log(note.id);
  dialogRef.afterClosed().subscribe(image => {
   
    if(image!=null)
    {
      console.log('This is My Image of fundoo');
          this.httpUser.uploadImage(image.file).subscribe((response:any)=>{
              console.log("dashboard image upload");
          });
    }
    
  });
}
changeView()
{
  this.noteView = !this.noteView;
  console.log("View"+this.noteView);
  this.interactionService.sendView(this.noteView);
}
}
