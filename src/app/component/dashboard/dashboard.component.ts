import { Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef,OnDestroy} from '@angular/core';
import { Router, Route, ActivatedRoute } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LabelDialogBoxComponent} from 'src/app/component/label-dialog-box/label-dialog-box.component';
import {LabelService} from 'src/app/Service/label.service'
import { LabelDto } from 'src/app/model/label.labelDto';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {
  mobileQuery: MediaQueryList;


  

  private _mobileQueryListener: () => void;

  constructor(private httpLabel:LabelService, changeDetectorRef: ChangeDetectorRef, media: MediaMatcher,  private router:Router, 
    private dialog:MatDialog) {
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
     maxHeight:'500px'
    });
    // console.log(note.id);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      
    });
}
}
