import { Injectable, Inject } from '@angular/core';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class CommonService {

  private notify = new Subject<any>();


  notifyObservable$ = this.notify.asObservable();

  constructor(){}

  public notifyOther(data: any) {
    if (data) {
      this.notify.next(data);
    }
  }
}
