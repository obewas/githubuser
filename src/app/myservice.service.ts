import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  showTodayDate(){
    let tdate = new Date()
    return tdate
  }
}
