import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InteractionService {

  private changeView = new Subject<boolean>();
  changeView$ = this.changeView.asObservable();
  constructor() { }
  sendView(view:boolean)
  {
      console.log("Inside interaction service "+view);
      this.changeView.next(view);
  }
}
