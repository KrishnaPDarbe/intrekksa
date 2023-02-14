import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-artificial-intelligence',
  templateUrl: './artificial-intelligence.component.html',
  styleUrls: ['./artificial-intelligence.component.scss']
})
export class ArtificialIntelligenceComponent implements OnInit {

  start: boolean = false

  ngOnInit () {
    setInterval(()=>this.start=!this.start,1500)
  }

}
