import { Component, OnInit, Inject} from '@angular/core';
import { ImageCroppedEvent } from 'ngx-image-cropper';
import { UserService } from 'src/app/Service/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatSnackBar} from '@angular/material';
import { DataService } from 'src/app/Service/data-service.service';
@Component({
  selector: 'app-profile-dialog-box',
  templateUrl: './profile-dialog-box.component.html',
  styleUrls: ['./profile-dialog-box.component.scss']
})
export class ProfileDialogBoxComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private httpUser:UserService,private dialogRef: MatDialogRef<ProfileDialogBoxComponent>, dataService:DataService) { }
  imageChangedEvent: any = '';
  croppedImage: any = '';
  ngOnInit() {
  }
  
    
    fileChangeEvent(event: any): void {
      console.log("Inside event");
        this.imageChangedEvent = event;
    }
    imageCropped(event: ImageCroppedEvent) {
        console.log("Inside imagecrop ",event);
        this.croppedImage = event;
        console.log("Cropped Image=",this.croppedImage);
        
    }
    imageLoaded() {
        // show cropper
    }
    cropperReady() {
        // cropper ready
    }
    loadImageFailed() {
        // show message
    }

    setProfilePhoto()
    {
      console.log('first log',this.croppedImage);
      
       if (this.croppedImage != null) {
      this.dialogRef.close(this.croppedImage);

    }
    }
}
