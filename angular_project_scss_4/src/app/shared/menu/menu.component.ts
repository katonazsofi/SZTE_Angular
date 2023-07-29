import { Component, OnInit, AfterViewInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Output() selectedPage: EventEmitter<string> = new EventEmitter();

  menuSwitch(pageValue: string) {
    this.selectedPage.emit(pageValue);
  }

  constructor() {
    console.log("constructor");
  }

  ngOnInit(): void {
    console.log("onInit");
  }

  ngAfterViewInit(): void {

    console.log("afterViewInit");
  }

}
