import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Output() public navigationEvent = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  public onClick(event: any) {
    this.navigationEvent.emit(event);
  }

}
