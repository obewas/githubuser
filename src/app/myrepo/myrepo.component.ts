import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service'

@Component({
  selector: 'app-myrepo',
  templateUrl: './myrepo.component.html',
  styleUrls: ['./myrepo.component.css']
})
export class MyrepoComponent implements OnInit {
  newcomponent = "Entered in new component created";
  todaydate;
  constructor(private myservice:MyserviceService) { }

  ngOnInit() {
    this.todaydate = this.myservice.showTodayDate
  }

}
