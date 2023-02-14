import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobility-service',
  templateUrl: './mobility-service.component.html',
  styleUrls: ['./mobility-service.component.scss']
})
export class MobilityServiceComponent implements OnInit {
  start: boolean = false

  ngOnInit () {
    setInterval(()=>this.start=!this.start,1500)
  }

}
