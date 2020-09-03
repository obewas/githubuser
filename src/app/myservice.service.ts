import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
   private finaldata = []
   private apiUrl = "http://api.github.com/users"
  constructor(private http:HttpClient) { }
  showTodayDate(){
    let tdate = new Date()
    return tdate

  
  }
  getData(){
    return  this.http.get(this.apiUrl)
  }
}
