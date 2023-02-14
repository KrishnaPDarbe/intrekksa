import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-up',
  templateUrl: './top-up.component.html',
  styleUrls: ['./top-up.component.scss']
})
export class TopUpComponent implements OnInit {

  start: boolean = false

  ngOnInit () {
    setInterval(()=>this.start=!this.start,1500)
  }

}
