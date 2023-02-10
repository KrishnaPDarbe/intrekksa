import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'interkk-idle-popup',
  templateUrl: './idle-popup.component.html',
  styleUrls: ['./idle-popup.component.scss']
})
export class IdlePopupComponent implements OnInit {

  @Output() popupClosed = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  closePopUp(){
    this.popupClosed.emit(false)
  }
}
