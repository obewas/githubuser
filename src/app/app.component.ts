import { Component } from '@angular/core';
import { MyserviceService } from './myservice.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'githubuser';
  todaydate;
  public userdata = []
  constructor(private myservice:MyserviceService){}
  ngOnInit(){
    this.todaydate = this.myservice.showTodayDate();
    this.myservice.getData().subscribe((data)=>{
      this.userdata = Array.from(Object.keys(data),k=>data[k]);
      console.log(this.userdata)
    })
  }
}
