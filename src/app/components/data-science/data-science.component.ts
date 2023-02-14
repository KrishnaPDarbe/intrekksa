import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-science',
  templateUrl: './data-science.component.html',
  styleUrls: ['./data-science.component.scss']
})
export class DataScienceComponent implements OnInit {

  start: boolean = false

  ngOnInit () {
    setInterval(()=>this.start=!this.start,1500)
  }

}
