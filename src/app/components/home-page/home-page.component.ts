import { Component, OnInit } from '@angular/core';
import { BnNgIdleService } from 'bn-ng-idle';

@Component({
  selector: 'intrekksarl-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent  {

  userisIdle:boolean=false
  constructor(private bnIdle: BnNgIdleService) {
    this.bnIdle.startWatching(300).subscribe((res) => {
      if(res) {
          this.userisIdle= true
      }
    })
   }


  closePopup(){
    this.userisIdle= false
  }
}
