import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service'

@Component({
  selector: 'app-publicrepo',
  templateUrl: './publicrepo.component.html',
  styleUrls: ['./publicrepo.component.css']
})
export class PublicrepoComponent implements OnInit {
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