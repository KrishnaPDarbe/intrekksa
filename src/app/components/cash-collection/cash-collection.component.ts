import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cash-collection',
  templateUrl: './cash-collection.component.html',
  styleUrls: ['./cash-collection.component.scss']
})
export class CashCollectionComponent implements OnInit {

  start: boolean = false

  ngOnInit () {
    setInterval(()=>this.start=!this.start,1500)
  }

}
